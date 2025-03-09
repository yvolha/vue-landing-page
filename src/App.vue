<script setup lang="ts">
import ComplianceSection from './sections/ComplianceSection/ComplianceSection.vue'
import FAQSection from './sections/FAQSection/FAQSection.vue'
import HeroSection from './sections/HeroSection/HeroSection.vue'
</script>

<template>
  <div class="app-container">
    <HeroSection />
    <ComplianceSection />
    <FAQSection />
  </div>
</template>

<style lang="scss">
.app-container {
  background-color: $background-primary;
}
</style>
