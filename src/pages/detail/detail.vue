<template>
  <view class="transcript-wrap">
    <Loading :loading="loading" :error="exceptionText" size="large">
      <view class="transcript" v-if="article?.transcript">
        <template v-for="item in texts" :key="item.type + item.value">
          <view class="title" v-if="item.type === 'title'">{{ item.value }}</view>
          <template v-else>
            <view class="text-wrap">
              <text class="text">{{ item.value }}</text>
              <text class="iconfont i-translater" @tap="doTranslate(item.value, item.trans)"></text>
            </view>
            <view class="text-wrap trans" v-show="item.trans">{{ item.trans }}</view>
          </template>
        </template>
      </view>
      <view class="transcript" v-else>
        <view class="text-wrap">The transcript is on the way!</view>
      </view>
      <view v-show="isH5 && article?.source" class="footer">
        from:
        <a :href="article?.source" target="__blank">pbs</a>
      </view>
      <view class="action" :style="{ backgroundImage: `url(${article?.cover})` }">
        <text class="iconfont i-play" v-if="paused" @tap="play"></text>
        <text class="iconfont i-pause" v-else @tap="pause"></text>
        <text class="iconfont i-home" @tap="goBack"></text>
      </view>
    </Loading>
  </view>
</template>   

<script setup lang="ts">
import { ref, watch } from "vue";
import Taro, { useRouter, setNavigationBarTitle } from '@tarojs/taro'
import { Translation } from "@1r21/api-h5";

import Loading from "@/components/Loading.vue";
import useNews from "@/composables/useNews";
import { request } from '@/utils/request'

const paused = ref(true);
const isH5 = ref(process.env.TARO_ENV === 'h5');

const router = useRouter()
const { id } = router.params
const { news: article, texts, loading, exceptionText } = useNews(
  Number(id)
);

const innerAudioContext = Taro.createInnerAudioContext()

watch(article, () => {
  if (article.value?.src) {
    innerAudioContext.src = article.value.src
  }

  if (article.value?.date) {
    setNavigationBarTitle({
      title: article.value.date
    })
  }
})

innerAudioContext.onPlay(() => {
  console.log('start play')
})

innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})

function play() {
  paused.value = false
  innerAudioContext.play()
}

function pause() {
  paused.value = true
  innerAudioContext.pause()
}

function goBack() {
  Taro.navigateTo({
    url: `/pages/index/index`
  })
}

async function doTranslate(text: string, trans: string | undefined) {
  if (!trans) {
    const { list = [] } = await request<{ list: Translation[] }>('/api/translate', {
      method: 'POST',
      data: {
        q: text
      }
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
</script>
<style>
.transcript-wrap {
  height: 100%;
  overflow: auto;
  background-color: beige;
}

.transcript {
  padding: 24px 28px;
  color: #666;
}

.transcript>.title,
.transcript>.text-wrap {
  font-size: 32px;
  line-height: 1.5;
}

.transcript>.title {
  margin-bottom: 22px;
  font-weight: bold;
}

.transcript>.text-wrap {
  margin-bottom: 16px;

}

.transcript>.text-wrap .transcript>.trans {
  line-height: 1.3;
  color: #888;
  font-size: 26px;
}

.transcript>.text-wrap>.text {
  user-select: text;
}

.transcript-wrap .footer {
  padding: 14px 24px;
  text-align: right;
  font-size: 28px;
  color: #999;
  text-decoration: underline;
  font-style: italic;
}

.action {
  position: fixed;
  display: flex;
  right: 28px;
  bottom: 60px;
  background-color: #ccc;
  border-radius: 2px;
  background-size: cover;
}

.action .iconfont {
  font-size: 42px;
  color: #fff;
}

.action .i-home {
  color: #ffa500;
}
</style>
