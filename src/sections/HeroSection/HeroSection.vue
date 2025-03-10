<script setup lang="ts">
import HeroSectionForm from './HeroSectionForm/HeroSectionForm.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <a class="link" href="/" target="_blank">
        <img src="../../assets/hero/logo.svg" alt="FM Intelligence logo." />
      </a>
    </header>
    <section class="hero">
      <div class="title-group">
        <h1 class="title">
          Stay Informed.<br />
          Stay Compliant.
        </h1>
        <div class="subtitle">
          Sign up to access the latest Insights on Regulatory Highlights, Recent Developments, and
          Future Outlook—all in one monthly report.
        </div>
      </div>
      <HeroSectionForm />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @include tablet {
    padding-block-start: 27px;
  }
}

.hero {
  display: flex;
  flex-direction: column;

  @include desktop {
    flex-direction: row;
    gap: 100px;
    align-items: center;
  }
}

.header {
  padding-bottom: 24px;

  @include tablet {
    padding-bottom: 54px;
  }

  @include desktop {
    padding-bottom: 96px;
  }
}

.link {
  transition: 220ms;

  &:hover {
    filter: drop-shadow(2px 4px 6px $link-color-hover);
  }
}

.title {
  padding-bottom: 24px;

  font-weight: 600;
  font-size: 30px;
  line-height: 38px;

  @include tablet {
    padding-bottom: 36px;

    font-size: 48px;
    line-height: 60px;
  }

  @include desktop {
    font-size: 60px;
    line-height: 72px;
  }
}

.subtitle {
  padding-bottom: 24px;

  @include tablet {
    padding-bottom: 54px;
    font-size: 20px;
  }

  @include desktop {
    padding-bottom: 0;
    max-width: 636px;
  }
}
</style>
