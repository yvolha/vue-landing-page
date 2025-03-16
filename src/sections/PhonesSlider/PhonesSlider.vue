<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
</script>

<template>
  <section class="container phones">
    <swiper-container
      :loop="true"
      :autoplay="{ delay: 2000 }"
      :loopAdditionalSlides="true"
      :slides-per-view="1"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }"
    >
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-1@2x.webp" alt="Phone 1" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-2@2x.webp" alt="Phone 2" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-3@2x.webp" alt="Phone 3" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-4@2x.webp" alt="Phone 4" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-1@2x.webp" alt="Phone 1" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-2@2x.webp" alt="Phone 2" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-3@2x.webp" alt="Phone 3" />
      </swiper-slide>
      <swiper-slide>
        <img class="image" src="../../assets/phones/phone-4@2x.webp" alt="Phone 4" />
      </swiper-slide>
    </swiper-container>
  </section>
</template>

<style lang="scss">
.container.phones {
  padding: 0;
}
.image {
  width: 500px;
  height: 400px;
}
</style>
