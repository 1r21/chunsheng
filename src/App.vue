<template>
  <div>
    <div
      class="transcript"
      v-if="audio?.transcript"
      @contextmenu.prevent="getContextmenu"
      @click="handleClick"
    >
      <div v-html="audio?.transcript" />
      <p v-show="audio?.transcript">from: <a :href="audio?.source">pbs</a></p>
    </div>
    <div v-else-if="loading" class="center">loading</div>
    <div v-else class="center">No Data</div>
    <audio :src="audio?.src" @ended="ended" ref="audio"></audio>
    <div
      class="player"
      v-if="audio?.src"
      :style="{ backgroundImage: `url(${audio?.cover})` }"
    >
      <i class="iconfont i-play" v-if="paused" @click="play" />
      <i class="iconfont i-pause" v-else @click="pause" />
    </div>
    <div
      v-show="tBtnVisible"
      class="translate-btn"
      :style="{ top: `${tBtnTop}px`, left: `${tBtnLeft}px` }"
      @click="showTranslation"
    >
      <i class="iconfont i-fanyi" />
    </div>
    <div
      class="translate-wrap"
      v-if="translationVisible"
      :style="{ top: `${tBtnTop}px`, left: `${tBtnLeft}px` }"
    >
      <div v-show="translateLoading">loading...</div>
      <div v-show="!translateLoading">{{ translation && translation.dst }}</div>
    </div>
  </div>
</template>

<script>
import { getNews, translate } from "/@/services";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      audioEl: null,
      paused: true,
      audio: null,
      tBtnTop: 0,
      tBtnLeft: 0,
      tBtnVisible: false,
      selectText: "",
      translateLoading: false,
      translation: null,
      translationVisible: false,
    };
  },
  async mounted() {
    this.audioEl = this.$refs.audio;
    this.loading = true;
    const { list } = await getNews();
    if (list) {
      const [first] = list;
      this.audio = first;
    }
    this.loading = false;
  },
  methods: {
    play() {
      if (this.audio) {
        this.audioEl.play();
        this.paused = false;
      }
    },
    pause() {
      this.audioEl.pause();
      this.paused = true;
    },
    ended() {
      this.paused = true;
    },
    getContextmenu(e) {
      this.translationVisible = false;
      const { x, y } = e;
      this.tBtnLeft = x;
      this.tBtnTop = y + 12;
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const txt = String(range);
      if (txt) {
        this.selectText = txt;
        this.tBtnVisible = true;
      }
    },
    handleClick(e) {
      this.tBtnVisible = false;
      this.translationVisible = false;
    },
    async showTranslation() {
      this.translationVisible = true;
      this.translateLoading = true;
      this.translation = null;
      this.tBtnVisible = false;
      const { list } = await translate(this.selectText);
      if (list.length > 0) {
        const [first] = list;
        this.translation = first;
      }
      this.translateLoading = false;
    },
  },
};
</script>
<style scoped>
.transcript {
  position: relative;
  font-size: 0.9rem;
  color: #666;
  text-indent: 2em;
  padding: 0 1rem;
}
.transcript > p {
  text-align: right;
  font-size: 0.5rem;
  color: #999;
  text-decoration: underline;
  font-style: italic;
}
.center {
  text-align: center;
  margin-top: 50%;
}
.player {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #ccc;
  border-radius: 2px;
  background-size: cover;
}
.player .iconfont {
  display: flex;
  font-size: 2rem;
  color: #fff;
}
.translate-btn {
  position: absolute;
  padding: 0.05rem 0.1rem;
  background-color: #fefefe;
  border-radius: 0.1rem;
}
.translate-btn > .i-fanyi {
  color: #666;
  font-size: 1.2rem;
}
.translate-wrap {
  position: absolute;
  color: #999;
  padding: 0.3rem;
  font-size: 0.74rem;
  background-color: #fefefe;
  border-radius: 0.1rem;
}
</style>
