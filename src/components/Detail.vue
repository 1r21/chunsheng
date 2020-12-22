<template>
  <Loading :loading="loading" :error="exceptionText" size="large">
    <div
      class="transcript"
      @contextmenu.prevent="getContextmenu"
      @touchstart="hideTranslate"
    >
      <div v-html="article.transcript" />
      <p v-show="article.transcript" class="footer">
        from: <a :href="article.src">pbs</a>
      </p>
    </div>
    <audio :src="article.src" @ended="ended" ref="audio"></audio>
    <div class="action" :style="{ backgroundImage: `url(${article.cover})` }">
      <i class="iconfont i-play" v-if="paused" @click="play" />
      <i class="iconfont i-pause" v-else @click="pause" />
      <router-link to="/" custom v-slot="{ navigate }">
        <i class="iconfont i-home" @click="navigate" />
      </router-link>
    </div>
    <TranslateBox
      :text="translateText"
      :position="translatePos"
      :visible="translateVisible"
      :btnVisible="translateBtnVisible"
      @show="translateVisible = true"
      @hide="translateBtnVisible = false"
    />
  </Loading>
</template>

<script lang="ts">
import { changeTitle } from "/@/utils";
import { News, Translation, getNewsById, translate } from "/@/services";
import Loading from "/@/components/Loading.vue";
import TranslateBox from "/@/components/TranslateBox.vue";

export default {
  name: "Detail",
  components: {
    Loading,
    TranslateBox,
  },
  data() {
    return {
      loading: false,
      exceptionText: "",
      audioEl: <HTMLAudioElement>{},
      paused: true,
      article: <News>{},
      translatePos: {},
      translateText: "",
      translateVisible: false,
      translateBtnVisible: false,
    };
  },
  async mounted() {
    const { id } = this.$route.params;
    this.loading = true;
    try {
      const article = await getNewsById(String(id));
      if (article) {
        const { date, title } = article;
        this.article = article;
        changeTitle(`(${date}) ${title}`);
      }
    } catch (error) {
      this.exceptionText = error;
      changeTitle(typeof error === "string" ? error : "error");
    }
    this.loading = false;
    this.$nextTick(() => {
      // dom updated
      this.audioEl = <HTMLAudioElement>this.$refs.audio;
    });
  },
  methods: {
    play() {
      if (this.audioEl) {
        this.audioEl.play();
        this.paused = false;
      }
    },
    pause() {
      if (this.audioEl) {
        this.audioEl.pause();
        this.paused = true;
      }
    },
    ended() {
      this.paused = true;
    },
    getContextmenu(e: MouseEvent) {
      const { x, y } = e;
      this.translatePos = { x, y };
      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        const txt = String(range);
        if (txt) {
          this.translateText = txt;
          this.translateBtnVisible = true;
        }
      }
    },
    hideTranslate() {
      this.translateVisible = false;
      this.translateBtnVisible = false;
    },
  },
};
</script>
<style>
.transcript .video-transcript p {
  text-align: justify;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
<style scoped>
.transcript {
  position: relative;
  font-size: 0.9rem;
  color: #666;
  text-indent: 2em;
  padding: 0.5rem 1rem;
  background-color: beige;
}
.transcript > .footer {
  text-align: right;
  font-size: 0.5rem;
  color: #999;
  text-decoration: underline;
  font-style: italic;
}

.action {
  position: fixed;
  display: flex;
  bottom: 2rem;
  right: 2rem;
  background-color: #ccc;
  border-radius: 2px;
  background-size: cover;
}
.action .iconfont {
  display: flex;
  font-size: 1.4rem;
  color: #fff;
}
.action .i-home {
  color: #ffa500;
}
.translate-btn {
  position: fixed;
  padding: 0.05rem 0.1rem;
  background-color: #fefefe;
  border-radius: 0.1rem;
}
.translate-btn > .i-fanyi {
  color: #666;
  font-size: 1.2rem;
}
.translate-wrap {
  position: fixed;
  color: #999;
  padding: 0.3rem;
  font-size: 0.74rem;
  background-color: #fefefe;
  border-radius: 0.1rem;
}
</style>
