<template>
  <div class="transcript-wrap">
    <Loading :loading="loading" :error="exceptionText" size="large">
      <div
        class="transcript"
        v-if="article?.transcript"
        @contextmenu.prevent="getContextmenu"
        @click="hideTranslate"
        @touchstart="hideTranslate"
      >
        <template v-for="item in texts" :key="item.type + item.value">
          <p class="title" v-if="item.type === 'title'">{{ item.value }}</p>
          <template v-else>
            <p class="text">
              <span>{{ item.value }}</span>
              <span>
                <i
                  class="iconfont i-translater"
                  @click="doTranslate(item.value, item.trans)"
                />
              </span>
            </p>
            <p class="text trans" v-show="item.trans">{{ item.trans }}</p>
          </template>
        </template>
      </div>
      <div class="transcript" v-else>
        <p class="text">The transcript is on the way!</p>
      </div>
      <p v-show="article?.source" class="footer">
        from: <a :href="article?.source">pbs</a>
      </p>
      <audio :src="article?.src" @ended="ended" ref="audioEl"></audio>
      <div
        class="action"
        ref="actionBtn"
        @touchstart="touchStart"
        @touchend="touchEnd"
        @touchmove="touchMove"
        :style="{ backgroundImage: `url(${article?.cover})` }"
      >
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
        @show-box="translateVisible = true"
        @hide-btn="translateBtnVisible = false"
      />
    </Loading>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { changeTitle } from "@/utils";

import Loading from "@/components/Loading.vue";
import TranslateBox from "@/components/TranslateBox.vue";

import useTranslate from "@/composables/useTranslate";
import useNews from "@/composables/useNews";

export default {
  name: "Detail",
  components: {
    Loading,
    TranslateBox,
  },
  setup() {
    const paused = ref(true);
    const translateVisible = ref(false);
    const translateBtnVisible = ref(false);
    const translateText = ref("");
    const translatePos = ref({ x: 0, y: 0 });
    const audioEl = ref<HTMLAudioElement | null>(null);
    const actionBtn = ref<HTMLDivElement | null>(null);
    // finger pos
    const startX = ref(0);
    const startY = ref(0);
    // target pos
    const boxX = ref(0);
    const boxY = ref(0);

    const { getMousePos, doTranslate } = useTranslate();
    const route = useRoute();
    const { id } = route.params;
    const { news, texts, loading, exceptionText, docTitle } = useNews(
      Number(id)
    );
    onMounted(() => {
      changeTitle(docTitle.value);
    });

    function getContextmenu(e: MouseEvent) {
      const pos = getMousePos(e);
      if (pos) {
        const { x, y, sectionText } = pos;
        translateText.value = sectionText;
        translatePos.value = { x, y };
        translateBtnVisible.value = true;
      }
    }

    function play() {
      if (audioEl.value) {
        audioEl.value.play();
        paused.value = false;
      }
    }
    function pause() {
      if (audioEl.value) {
        audioEl.value.pause();
        paused.value = true;
      }
    }

    function ended() {
      paused.value = true;
    }

    function hideTranslate() {
      translateVisible.value = false;
      translateBtnVisible.value = false;
    }

    return {
      loading,
      exceptionText,
      audioEl,
      getContextmenu,
      texts,
      article: news,
      translateText,
      translatePos,
      translateVisible,
      translateBtnVisible,
      doTranslate: (text: string, trans: string | null) => {
        doTranslate(texts.value, text, trans);
      },
      hideTranslate,
      paused,
      play,
      pause,
      ended,
      actionBtn,
      touchStart(e: TouchEvent) {
        const { pageX, pageY } = e.targetTouches[0];
        startX.value = pageX;
        startY.value = pageY;
        if (actionBtn.value) {
          const {
            style,
            offsetLeft,
            offsetTop,
            offsetWidth,
            offsetHeight,
          } = actionBtn.value;
          boxX.value = offsetLeft + offsetWidth;
          boxY.value = offsetTop + offsetHeight;
          style.boxShadow = "0 0 10px rgba(0, 0, 0, .5)";
        }
      },
      touchEnd() {
        if (actionBtn.value) {
          actionBtn.value.style.boxShadow = "none";
        }
      },
      touchMove(e: TouchEvent) {
        e.preventDefault();
        const { clientHeight, clientWidth } = document.documentElement;
        const { pageX, pageY } = e.targetTouches[0];
        const moveX = pageX - startX.value;
        const moveY = pageY - startY.value;
        if (actionBtn.value) {
          const { style } = actionBtn.value;
          style.right = `${clientWidth - (boxX.value + moveX)}px`;
          style.bottom = `${clientHeight - (boxY.value + moveY)}px`;
        }
      },
    };
  },
};
</script>
<style scoped>
.transcript-wrap {
  height: 100%;
  overflow: auto;
  background-color: beige;
}
.transcript {
  padding: 0.5em 1em;
  color: #666;
}
.transcript > p {
  font-size: 0.74em;
  text-indent: 2em;
  text-align: justify;
}
.transcript > .title {
  margin-bottom: 0.6em;
  font-weight: bold;
}
.transcript > .text {
  margin-bottom: 0.5em;
}
.transcript > .trans {
  line-height: 1.3;
  color: #888;
  font-size: 0.64em;
}

.transcript-wrap .footer {
  padding: 0.5em 1em;
  text-align: right;
  font-size: 0.6em;
  color: #999;
  text-decoration: underline;
  font-style: italic;
}

.action {
  position: fixed;
  display: flex;
  right: 2rem;
  bottom: 2rem;
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
</style>
