<script setup lang="ts">
const { title, subtitle } = defineProps({
  title: String,
  subtitle: String,
})
</script>

<template>
  <div class="compliance-block">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  padding-bottom: 8px;

  @include tablet {
    font-size: 20px;
    line-height: 30px;
  }
}

.subtitle {
  color: $font-color-secondary;

  @include tablet {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
