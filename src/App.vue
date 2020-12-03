<template>
  <div>
    <div class="transcript" v-if="audio?.transcript">
      <div v-html="audio?.transcript" />
      <p v-show="audio?.transcript">
        from: <a href="https://www.pbs.org/newshour/latest">pbs</a>
      </p>
    </div>
    <div v-else>No Data</div>
    <audio :src="audio?.src" @ended="ended" ref="audio"></audio>
    <div class="player" v-if="audio?.src">
      <i class="iconfont i-play" v-if="paused" @click="play" />
      <i class="iconfont i-pause" v-else @click="pause" />
    </div>
  </div>
</template>

<script>
import { getNews } from "/@/services";

export default {
  name: "App",
  data() {
    return {
      audioEl: null,
      paused: true,
      audio: null,
    };
  },
  async mounted() {
    this.audioEl = this.$refs.audio;
    const { list } = await getNews();
    if (this.list) {
      const [first] = list;
      this.audio = first;
    }
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
  },
};
</script>
<style scoped>
.transcript {
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
.player {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #ccc;
  border-radius: 2px;
}
.player .iconfont {
  display: flex;
  font-size: 2rem;
}
</style>
