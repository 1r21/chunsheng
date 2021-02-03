<template>
  <Loading :loading="loading" :error="exceptionText" size="large">
    <div
      class="transcript"
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
import { changeTitle, entityMap } from "/@/utils";
import { News, getNewsById, translate } from "/@/services";
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
      texts: <{ type: string; value: string; trans?: string }[]>[],
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
        this.parseText(article);
        changeTitle(`(${date}) ${title}`);
      }
    } catch (error) {
      const errMsg = typeof error === "string" ? error : "error";
      this.exceptionText = errMsg;
      changeTitle(errMsg);
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
    parseText(article: News) {
      let content = article.transcript.replace(/(\r\n|\n|\r)/gm, "");
      for (let key in entityMap) {
        const re = new RegExp("&" + key + ";", "g");
        content = content.replace(re, entityMap[key]);
      }
      const hReg = /<p[^>]*>(.*?)<\/p>/gm;
      const texts = content.match(hReg);

      if (texts) {
        this.texts = texts.map((item) => {
          if (item.includes("</strong>")) {
            const tRe = /<p><strong[^>]*>(.*?)<\/strong><\/p>/g;
            return {
              type: "title",
              value: item.replace(tRe, "$1"),
            };
          }
          return {
            type: "text",
            value: item.replace(/<p[^>]*>(.*?)<\/p>/g, "$1"),
          };
        });
      }
    },
    async doTranslate(text: string, trans: string) {
      if (trans) {
        this.texts = this.texts.map((item) => {
          if (item.value === text) {
            item.trans = "";
            return item;
          }
          return item;
        });
      } else {
        const { list } = await translate(text);
        if (list && list.length > 0) {
          const [first] = list;
          this.texts = this.texts.map((item) => {
            if (item.value === text) {
              item.trans = first.dst;
              return item;
            }
            return item;
          });
        }
      }
    },
  },
};
</script>
<style scoped>
.transcript {
  position: relative;
  padding: 0.5em 1em;
  color: #666;
  background-color: beige;
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

.transcript > .footer {
  text-align: right;
  font-size: 0.6em;
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
</style>
