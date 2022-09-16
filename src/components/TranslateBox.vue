<template>
  <div class="translate" :style="props.position">
    <i class="iconfont i-fanyi" v-show="btnVisible" @click="showTranslation" />
    <Loading :loading="loading" icon="translater" size="small">
      <div class="content" v-if="visible">
        <div v-if="!translation">No result</div>
        <template v-else>
          <p class="before">
            <span>S:</span>
            <span>{{ translation.src }}</span>
          </p>
          <p class="after">
            <span class="dst">D:</span>
            <span>{{ translation.dst }}</span>
          </p>
        </template>
      </div>
    </Loading>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { type Translation, } from "@1r21/api-h5";

type Pos = {
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
};

interface Props {
  position: Pos;
  text: string;
  visible: boolean;
  btnVisible: boolean;
}

const emit = defineEmits<{
  (e: 'hide-btn'): void;
  (e: 'show-box'): void;
}>()

const props = defineProps<Props>()

const translation = ref<Translation | null>(null);
const loading = ref(false);

async function showTranslation() {
  emit("hide-btn");
  emit("show-box");
  loading.value = true;
  translation.value = null;
  const { list } = await translate(props.text);
  if (list && list.length > 0) {
    const [first] = list;
    translation.value = first;
  }
  loading.value = false;
}

</script>
<style scoped>
.translate {
  position: fixed;
  background-color: #fefefe;
  border-radius: 0.18rem;
}

.translate>.i-fanyi {
  color: #666;
  padding: 0.05rem 0.1rem;
  font-size: 1em;
}

.content {
  color: #999;
  max-height: 15rem;
  font-size: 0.6em;
  padding: 0.1rem 0.2rem;
  line-height: 1.4;
  overflow: auto;
}

.dst {
  color: #1449de;
}
</style>