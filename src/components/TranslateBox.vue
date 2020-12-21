<template>
  <div class="translate" :style="pos">
    <i class="iconfont i-fanyi" v-show="btnVisible" @click="showTranslation" />
    <div class="content" v-if="visible">
      <Loading :loading="loading" icon="translater" size="small">
        <div v-if="!translation">No result</div>
        <template v-else>
          <p class="before">
            <span>S: </span>
            <span>{{ translation.src }}</span>
          </p>
          <p class="after">
            <span class="dst">D: </span>
            <span>{{ translation.dst }}</span>
          </p>
        </template>
      </Loading>
    </div>
  </div>
</template>
<script lang="ts">
import { Translation, translate } from "/@/services";
import Loading from "/@/components/Loading.vue";

type Pos = {
  x: number;
  y: number;
};

export default {
  name: "TranslateBox",
  components: {
    Loading,
  },
  props: {
    position: {
      required: true,
      type: Object,
    },
    text: {
      required: true,
      type: String,
    },
    visible: {
      required: true,
      type: Boolean,
    },
    btnVisible: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      translation: <Translation | null>{},
      loading: false,
    };
  },
  computed: {
    pos() {
      const { width: winWidth, height: winHeight } = window.screen;
      const { x, y } = <Pos>this.position;
      const offsetTop = 30;
      const left = x;
      const top = y - offsetTop;
      const deltaX = winWidth - left;
      const deltaY = winHeight - top;

      if (deltaX <= left && deltaY <= top) {
        return { bottom: `${deltaY}px`, right: `${deltaX}px` };
      }
      if (deltaX <= left) {
        return { top: `${top}px`, right: `${deltaX}px` };
      }
      if (deltaY <= top) {
        return { bottom: `${deltaY}px`, left: `${left}px` };
      }
      return { top: `${top}px`, left: `${left}px` };
    },
  },
  methods: {
    async showTranslation() {
      this.$emit("hide");
      this.$emit("show");
      this.loading = true;
      this.translation = { src: "", dst: "" };
      const { list } = await translate(this.text);
      if (list && list.length > 0) {
        const [first] = list;
        this.translation = first;
      }
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.translate {
  position: fixed;
  background-color: #fefefe;
  border-radius: 0.18rem;
}
.translate > .i-fanyi {
  color: #666;
  padding: 0.05rem 0.1rem;
  font-size: 1.2rem;
}
.content {
  color: #999;
  max-height: 15rem;
  font-size: 0.8rem;
  padding: 0.1rem 0.2rem;
  line-height: 1.4;
  overflow: auto;
}
.dst {
  color: #1449de;
}
</style>