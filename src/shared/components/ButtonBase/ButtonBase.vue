<script setup lang="ts"></script>

<template>
  <button class="button" type="submit">
    <slot> Get Free Report </slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  padding-block: 12px;

  width: 100%;

  cursor: pointer;
  outline: none;
  border: none;

  background-color: $button-color;
  color: $font-color-primary;
  transition: background-color 220ms;

  font-weight: 600;

  &:hover {
    background-color: $button-color-hover;
  }
}
</style>
