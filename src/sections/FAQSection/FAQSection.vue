<script setup lang="ts">
import { FAQ_SECTION_BLOCKS_DATA } from './FAQSection.constant'
</script>

<template>
  <section class="container faq">
    <h2 class="section-h2">Frequently Asked Questions</h2>
    <div class="answers">
      <div class="answer" v-for="(block, index) in FAQ_SECTION_BLOCKS_DATA" :key="index">
        <div class="title">{{ block.title }}</div>
        <div class="subtitle">{{ block.subtitle }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.answers {
  padding-top: 4px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @include tablet {
    padding-top: 12px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 64px;
  }

  @include desktop {
    padding-top: 44px;
  }
}

.answer {
  @include tablet {
    flex: 1 0 calc(50% - 32px);
  }

  @include desktop {
    flex: 1;
  }
}

.title {
  padding-bottom: 8px;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  @include tablet {
    font-weight: 400;
  }
}

.subtitle {
  color: $font-color-secondary;
}
</style>
