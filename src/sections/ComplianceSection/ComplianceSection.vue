<script setup lang="ts">
import { COMPLIANCE_SECTION_BLOCKS_DATA } from './ComplianceSection.constant'
import ComplianceSectionBlock from './ComplianceSectionBlock/ComplianceSectionBlock.vue'
</script>

<template>
  <section class="container compliance">
    <h2 class="section-h2">Your Monthly Compliance Guide</h2>
    <div class="subtitle">
      The Finance Magnates Compliance Industry Report provides an overview of key regulatory changes
      to help businesses navigate compliance challenges
    </div>
    <div class="features">
      <ComplianceSectionBlock
        v-for="(block, index) in COMPLIANCE_SECTION_BLOCKS_DATA"
        :key="index"
        :title="block.title"
        :subtitle="block.subtitle"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.compliance {
  background-color: $background-secondary;
}

.subtitle {
  padding-bottom: 24px;

  color: $font-color-secondary;
  font-size: 18px;
  line-height: 28px;

  @include tablet {
    padding-bottom: 32px;

    font-size: 20px;
    line-height: 30px;
  }

  @include desktop {
    padding-bottom: 64px;
  }
}

.features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @include tablet {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px 64px;
  }

  @include desktop {
    gap: 64px;
  }
}
</style>
