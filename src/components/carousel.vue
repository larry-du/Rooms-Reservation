<template>
  <b-carousel
    :interval="4000"
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333;"
  >
    <b-carousel-slide
      class="carousel_img"
      v-for="data in roomImage"
      :img-src="data.imageUrl"
      :key="data.id"
    ></b-carousel-slide>
  </b-carousel>
</template>

<style lang="scss">
.carousel_img img {
  object-fit: cover;
  height: 660px;
}</style
>>

<script>
export default {
  name: "carousel",
  props: {
    roomImage: {
      type: Array,
      require: true
    }
  }
};
</script>
