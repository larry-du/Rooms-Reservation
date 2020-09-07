<template>
  <div class="show_room">
    <header class="roomInfo">
      <div class="room_detail">
        <img :src="roomInfo[0].imageUrl[0]" alt />
      </div>
      <div class="more_detail">
        <img :src="roomInfo[0].imageUrl[1]" alt />
        <img :src="roomInfo[0].imageUrl[2]" alt />
      </div>
    </header>
    <h1 class="log" title="WhiteSpace">WhiteSpace</h1>
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
  }
};
</script>

<style lang="scss">
.roomInfo {
  display: flex;
  position: relative;
}

.room_detail {
  flex: 3 0 0;
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
    display: block;
  }
}

.log {
  width: 150px;
  height: 43px;
  line-height: 43px;
  font-size: $detail-log-title-size;
  font-family: $title-font-family;
  background-color: $gray-100;
  border: 1px solid;
  position: absolute;
  top: 42px;
  left: 63px;
}
</style>
