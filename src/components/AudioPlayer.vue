<template>
  <div class="player">
    <div class="time">
      <span>{{ formatPlayTime(currentTime) }}</span>
      <span>{{ formatPlayTime(duration) }}</span>
    </div>
    <div class="progress" @click="seek">
      <div class="point" />
      <div class="static" />
      <div class="dynamic" style="width:{{progress}}%" />
    </div>
    <div class="controls">
      <button @click="prev">
        <i class="iconfont i-prev" />
      </button>
      <button class="pause-btn" @click="pause" v-if="isPlaying">
        <i class="iconfont i-pause" />
      </button>
      <button class="play-btn" @click="play" v-else>
        <i class="iconfont i-play" />
      </button>
      <button @click="next">
        <i class="iconfont i-next" />
      </button>
      <button @click="showList">
        <i class="iconfont i-list" />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { formatPlayTime } from "@/utils";

export default defineComponent({
  name: "AudioPlayer",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      listVisible: false,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      currentIndex: 0,
      progress: 0, // percent
      progressWidth: 0,
    };
  },
  mounted() {
    console.log("list", this.list);
  },
  methods: {
    formatPlayTime,
    playAudio(audio: any) {
      // const { src, title, cover } = audio;
      // this.manager.title = title;
      // this.manager.coverImgUrl = cover;
      // this.manager.src = src;
      // this.manager.seek(0);
      // this.props.onPlay(this.data.currentIndex);
      // this.setData({
      //   duration: this.manager.duration,
      // });
    },
    playItem(current: any) {
      const { list } = this;
      const currentIndex = list.findIndex(
        (item: any) => item.src === current.src
      );
      this.currentIndex = currentIndex;
      this.playAudio(current);
      this.closeList();
    },
    seek() {
      //   const { offsetLeft } = e.currentTarget;
      //   const { clientX } = e.detail;
      //   const { duration, progressWidth } = this;
      //   const progress = (clientX - offsetLeft) / progressWidth;
      //   const currentTime = duration * progress;
      //   // this.manager.seek(currentTime);
    },
    play() {},
    pause() {},
    prev() {
      let { currentIndex, list } = this;
      currentIndex--;
      if (currentIndex >= 0) {
        this.currentIndex = currentIndex;
        this.playAudio(list[currentIndex]);
      }
    },
    next() {
      let { currentIndex, list } = this;
      currentIndex++;
      if (currentIndex < list.length) {
        this.currentIndex = currentIndex;
        this.playAudio(list[currentIndex]);
      }
    },
    showList() {
      this.listVisible = true;
    },
    closeList() {
      this.listVisible = false;
    },
  },
});
</script>
<style scoped>
.player {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
}

button {
  border: none;
  background-color: transparent;
}
.time {
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
  font-size: 0.8rem;
  color: #777;
}
.progress {
  position: relative;
}
.progress > .static,
.progress > .dynamic {
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 0.2rem;
  background-color: #ccc;
  margin-top: 2px;
  border-radius: 2px;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  margin-top: 1rem;
}
.controls > button {
  cursor: pointer;
  outline: none;
  -moz-user-focus: none;
}
.controls .iconfont {
  font-size: 1.2rem;
}
.controls .iconfont.i-play,
.controls .iconfont.i-pause {
  font-size: 1.8rem;
}
</style>