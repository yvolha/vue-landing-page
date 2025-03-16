<script setup lang="ts">
import ButtonBase from '@/shared/components/ButtonBase/ButtonBase.vue'
import InputBase from '@/shared/components/InputText/InputBase.vue'
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const emailAddress = ref('')
const companyName = ref('')
</script>

<template>
  <div class="form-wrapper">
    <form class="form">
      <div class="title">Get the Latest Industry Insights</div>
      <div class="inputs">
        <InputBase input-placeholder="John" input-label="First name" v-model="firstName" />
        <InputBase input-placeholder="Doe" input-label="Last name" v-model="lastName" />
        <InputBase
          input-placeholder="you@company.com"
          input-label="Email Address"
          v-model="emailAddress"
        />
        <InputBase
          input-placeholder="Enter company name"
          input-label="Company"
          v-model="companyName"
        />
      </div>
      <ButtonBase />
      <div class="privacy">
        By submitting this form, you agree to our <a href="/">Privacy Policy</a>.
      </div>
      <div class="terms">
        This site is protected by reCAPTCHA and the Google
        <a href="/">Privacy Policy</a> and <a href="/">Terms of Service</a> apply.
      </div>
    </form>
    <img class="image-top" src="../../../assets/hero/background-circle.svg" alt="" />
    <img class="image-bottom" src="../../../assets/hero/background-circle.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  position: relative;
}
.form {
  position: relative;
  z-index: 1;

  padding: 32px;
  display: flex;
  flex-direction: column;

  border: 1px solid transparent;
  border-radius: 16px;
  background:
    linear-gradient($background-secondary 0 0) padding-box,
    linear-gradient(135deg, #acaeb7, #4c4d51) border-box;

  @include tablet {
    padding: 48px;
  }

  @include desktop {
    max-width: 576px;
  }
}

.image-top {
  inset-inline-start: -300px;
  inset-block-start: -150px;
  position: absolute;

  @include tablet {
    width: 1000px;
    height: 950px;

    inset-inline-start: -400px;
    inset-block-start: -300px;
  }
}

.image-bottom {
  width: 750px;
  height: 700px;
  position: absolute;
  inset-inline-end: -250px;
  inset-block-end: -170px;
}

.title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-block: 32px;

  @include tablet {
    padding-block: 48px 32px;
  }
}

.privacy {
  color: $font-color-secondary;
  padding-block: 16px 12px;
}

.terms {
  color: $font-color-secondary;
  font-size: 14px;
  line-height: 20px;
}

a {
  text-decoration: underline;
  color: $font-color-primary;
  transition: color 220ms;

  &:hover {
    color: $link-color-hover;
  }
}
</style>
