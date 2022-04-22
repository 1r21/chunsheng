<template>
  <view class="transcript-wrap">
    <Loading :loading="loading" :error="exceptionText" size="large">
      <view class="transcript" v-if="news?.transcript" @click="hideTranslate">
        <template v-for="item in texts" :key="item.idx + item.type + item.value">
          <view class="title" v-if="item.type === 'title'">{{ item.value }}</view>
          <template v-else>
            <view class="text">
              <text>{{ item.value }}</text>
              <text>
                <text class="iconfont i-translater" @click="doTranslate(item.value, item.trans)"></text>
              </text>
            </view>
            <view class="text trans" v-show="item.trans">{{ item.trans }}</view>
          </template>
        </template>
      </view>
      <view class="transcript" v-else>
        <view class="text">The transcript is on the way!</view>
      </view>
      <view v-show="news?.source" class="footer">
        from:
        <a :href="news?.source" target="__blank">pbs</a>
      </view>
      <view class="action">
        <text class="iconfont i-play" v-if="paused" @click="play"></text>
        <text class="iconfont i-pause" v-else @click="pause"></text>
        <navigator url="/pages/home" hover-class="navigator-hover">
          <text class="iconfont i-home"></text>
        </navigator>
      </view>
    </Loading>
  </view>
</template>   

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

import { type News } from "@1r21/api-h5";
import { type Text, parseText } from "@1r21/util";

import Loading from "@/components/Loading.vue";
import { request } from "@/utils/request";

const loading = ref(false);
const exceptionText = ref("");
const news = ref<News | null>(null);
const texts = ref<(Text & { trans?: string })[]>([]);

const paused = ref(true);
const translateVisible = ref(false);
const translateBtnVisible = ref(false);

onLoad(async (option) => {
  const { id } = option;

  loading.value = true;
  const article = await request('/news/detail', {
    method: 'POST',
    data: {
      id,
    },
  })

  if (article) {
    news.value = article;
    if (article.transcript) {
      const formateTexts = parseText(article.transcript);
      if (formateTexts) {
        texts.value = formateTexts;
      }
    }
    loading.value = false;
  }
});


const innerAudioContext = uni.createInnerAudioContext();
if (news.value?.src) {
  innerAudioContext.src = news.value?.src;
}

async function doTranslate(text: string, trans: string | undefined) {
  if (!trans) {
    const { list = [] } = await request('/translate', {
      method: 'POST',
      data: {
        q: text,
      },
    });
    if (list && list.length) {
      const [first] = list
      texts.value = texts.value.map(v => ({
        ...v,
        trans: v.type === 'text' && v.value === first.src ? first.dst : ''
      }))
    }
  }
}

function play() {
  if (news.value?.src) {
    innerAudioContext.play();
    paused.value = false
  }
}

function pause() {
  innerAudioContext.pause();
  paused.value = true;
}

function hideTranslate() {
  translateVisible.value = false;
  translateBtnVisible.value = false;
}

</script>
<style scoped>
.transcript-wrap {
  height: 100%;
  overflow: auto;
  user-select: text;
  background-color: beige;
}

.transcript {
  user-select: auto;
  padding: 0.5em 1em;
  color: #666;
}

.transcript>.title,
.transcript>.text {
  font-size: 0.72em;
  line-height: 1.5;
}

.transcript>.title {
  margin-bottom: 0.6em;
  font-weight: bold;
}

.transcript>.text {
  margin-bottom: 0.5em;
}

.transcript>.trans {
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
