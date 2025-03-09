<script setup lang="ts"></script>

<template>
  <div class="hi">Template</div>
</template>

<style lang="scss" scoped>
.hi {
  font-size: 12px;

  @include mobile {
    font-size: 80px;
  }
}
</style>
