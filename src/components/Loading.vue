<template>
  <div class="loading-wrap" v-if="loading || error">
    <i v-if="loading" :class="['iconfont', 'loading', `i-${icon}`, size]"></i>
    <span v-else-if="error" class="error">{{ error }}</span>
  </div>
  <slot v-else></slot>
</template> 
<script>
export default {
  name: "Loading",
  props: {
    icon: {
      default: "loading",
      type: String,
    },
    size: {
      default: "default",
      type: String,
    },
    loading: Boolean,
    error: String,
  },
};
</script>
<style scoped>
.loading-wrap {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.loading {
  animation: rotate 0.8s linear infinite;
}

.loading.default {
  font-size: 2.4rem;
}

.loading.small {
  font-size: 1rem;
}

.loading.large {
  font-size: 3.2rem;
}

.error {
  color: #999;
  font-size: 0.8rem;
  padding: 0.4rem 1.5rem;
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>