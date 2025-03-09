<script setup lang="ts">
import ComplianceSection from './sections/ComplianceSection/ComplianceSection.vue'
import HeroSection from './sections/HeroSection/HeroSection.vue'
</script>

<template>
  <div class="app-container">
    <HeroSection />
    <ComplianceSection />
  </div>
</template>

<style lang="scss">
.app-container {
  background-color: $background-primary;
}
</style>
