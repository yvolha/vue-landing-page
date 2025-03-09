<script setup lang="ts">
import {
  FOOTER_SECTION_NAVIGATION_INFO,
  FOOTER_SECTION_POLICIES_INFO,
  FOOTER_SECTION_SOCIALS_INFO,
} from './FooterSection.constant'
</script>

<template>
  <footer class="container">
    <div class="logos">
      <a href="/" target="_blank">
        <img src="../../assets/footer/logo-footer-1.svg" alt="FM Intelligence logo." />
      </a>
      <a class="fm-logo" href="/" target="_blank">
        <img src="../../assets/footer/logo-footer-2.svg" alt="Finance Magnates logo." />
      </a>
    </div>

    <div class="intelligence">
      <div class="text">
        Finance Magnates Intelligence, part of Finance Magnates, delivers specialized research and
        insights on the financial markets. Offering Quarterly, Annual, and custom reports tailored
        to specific business needs, it covers key aspects such as trading volumes, market trends,
        regulations, and more
      </div>
      <div class="socials">
        <a
          v-for="(block, index) in FOOTER_SECTION_SOCIALS_INFO"
          :key="index"
          :href="block.href"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="block.imgSrc" alt="" />
        </a>
      </div>
    </div>

    <div class="navigation">
      <a
        class="text"
        v-for="(block, index) in FOOTER_SECTION_NAVIGATION_INFO"
        :key="index"
        :href="block.href"
        target="_blank"
        rel="noreferrer noopener"
      >
        {{ block.text }}
      </a>
    </div>
    <div class="footnotes">
      <div>© 2024 "Finance Magnates CY Ltd." All rights reserved.</div>
      <div class="policies">
        <a
          v-for="(block, index) in FOOTER_SECTION_POLICIES_INFO"
          :key="index"
          :href="block.href"
          target="_blank"
          rel="noreferrer noopener"
        >
          {{ block.text }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 32px;

  grid-template-areas:
    'logos'
    'intelligence'
    'navigation'
    'footnotes';

  @include tablet {
    gap: 32px 72px;
    grid-template-areas:
      'logos logos'
      'intelligence navigation'
      'footnotes footnotes';
  }

  @include desktop {
    grid-template-areas:
      'logos intelligence navigation'
      'footnotes footnotes footnotes';
  }
}

.logos {
  display: flex;
  flex-direction: column;
  gap: 48px;

  grid-area: logos;

  @include tablet {
    justify-content: space-between;
    flex-direction: row;
  }

  @include desktop {
    flex-direction: column;
    justify-content: flex-start;
  }
}

.intelligence {
  grid-area: intelligence;

  color: $font-color-secondary;
}

.socials {
  padding-top: 24px;
  display: flex;
  gap: 24px;
}

.navigation {
  grid-area: navigation;

  display: flex;
  flex-direction: column;

  a {
    color: $font-color-secondary;
    text-decoration: none;
  }

  @include tablet {
    padding-inline-end: 24px;
  }
}

.footnotes {
  grid-area: footnotes;

  * {
    color: $font-color-secondary;
    font-size: 14px;
    line-height: 22px;
  }

  display: flex;
  flex-direction: column;
  gap: 12px;

  @include desktop {
    padding-top: 32px;
    flex-direction: row;
    justify-content: space-between;
  }
}

.policies {
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;

  font-size: 14px;
  line-height: 22px;

  a {
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
  }
}

.text {
  font-size: 18px;
  line-height: 28px;
}

.fm-logo {
  @include tablet {
    padding-inline-end: 20px;
  }

  @include desktop {
    padding-inline-end: 0;
  }
}
</style>
