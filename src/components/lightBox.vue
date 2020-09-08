<template>
  <div class="light_box">
    <div class="arrow_left" @click="prev">
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
    </div>
    <div class="img_box">
      <img :src="getImage" :alt="getName" />
      <div class="img_text">
        <span>{{roomInfo[index].name}}</span>
        <span>{{index+1}}/{{roomInfo.length}}</span>
      </div>
    </div>
    <div class="arrow_right" @click="next">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "lightBox",
  data() {
    return { index: 0 };
  },
  props: {
    roomInfo: {
      type: Array,
      required: true
    }
  },
  methods: {
    next() {
      this.index = this.index + 1;
      if (this.index > this.roomInfo.length - 1) this.index = 0;
    },
    prev() {
      this.index = this.index - 1;
      if (this.index < 0) this.index = this.roomInfo.length - 1;
    }
  },
  computed: {
    getImage() {
      return this.roomInfo[this.index].imageUrl;
    },
    getName() {
      return this.roomInfo[this.index].name;
    }
  }
};
</script>

<style lang="scss">
.light_box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 60px;
  & .arrow_left {
    color: $white;
    margin-right: 81px;
    cursor: pointer;
  }
  & .arrow_right {
    color: $white;
    margin-left: 81px;
    cursor: pointer;
  }
}
.img_box {
  width: 696px;
  & img {
    width: 100%;
    height: 462px;
  }
  & .img_text {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: $white;
    letter-spacing: 1.67px;
    margin-top: 19px;
  }
}
</style>
