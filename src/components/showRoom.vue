<template>
  <div class="show_room">
    <header class="roomInfo">
      <div class="room_detail" @click="$emit('open-light-box')">
        <img :src="roomInfo[0].imageUrl[0]" alt />
      </div>
      <div class="more_detail" @click="$emit('open-light-box')">
        <img :src="roomInfo[0].imageUrl[1]" alt />
        <img :src="roomInfo[0].imageUrl[2]" alt />
      </div>
    </header>
    <h1 class="logo" title="WhiteSpace">WhiteSpace</h1>
  </div>
</template>

<script>
export default {
  name: "showRoom",
  props: {
    roomInfo: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>

<style lang="scss">
.roomInfo {
  display: flex;
  position: relative;
}

.room_detail {
  flex: 3 0 0;
  cursor: pointer;
  & img {
    width: 100%;
    height: 596px;
    object-fit: cover;
  }
}

.more_detail {
  display: none;
  flex: 1 0 0;
  & img {
    width: 100%;
    height: 298px;
    object-fit: cover;
  }
  @media (min-width: 576px) {
    cursor: pointer;
    display: block;
  }
}

.logo {
  width: 150px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  font-size: $detail-log-title-size;
  font-family: $title-font-family;
  background-color: $gray-100;
  border: 1px solid;
  position: absolute;
  top: 42px;
  left: 63px;
}
</style>
