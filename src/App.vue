<script setup lang="ts">
import ComplianceSection from './sections/ComplianceSection/ComplianceSection.vue'
import FAQSection from './sections/FAQSection/FAQSection.vue'
import FooterSection from './sections/FooterSection/FooterSection.vue'
import HeroSection from './sections/HeroSection/HeroSection.vue'
</script>

<template>
  <div class="app-container">
    <HeroSection />
    <ComplianceSection />
    <FAQSection />
    <FooterSection />
  </div>
</template>

<style lang="scss">
.app-container {
  position: relative;
  overflow: hidden;
  background-color: $background-primary;
}
</style>
