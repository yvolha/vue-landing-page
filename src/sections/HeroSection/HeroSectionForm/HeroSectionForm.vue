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
      <div class="privacy"></div>
      <div class="terms"></div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-wrapper {
  border-radius: 16px;
}
.form {
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
</style>
