<script setup lang="ts">
const {
  inputType = 'text',
  inputPlaceholder = '',
  inputLabel = '',
} = defineProps({
  inputType: String,
  inputPlaceholder: String,
  inputLabel: String,
})
const inputModel = defineModel()
</script>

<template>
  <label class="label">
    {{ inputLabel }}
    <input class="input" :type="inputType" :placeholder="inputPlaceholder" v-model="inputModel" />
  </label>
</template>

<style lang="scss" scoped>
.label {
  color: $font-color-secondary;
  font-weight: 500;
}

.input {
  margin-top: 6px;
  padding: 10px 14px;
  display: block;
  width: 100%;

  color: $font-color-primary;
  font-weight: 400;
  background-color: $background-secondary;
  border: #5e5e62 1px solid;
  outline: none;
  transition: outline 220ms;
  border-radius: 4px;

  &:focus {
    outline: 1px $link-color-hover solid;
  }

  &::placeholder {
    color: #888888;
  }
}
</style>
