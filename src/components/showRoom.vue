<template>
  <div class="show_room">
    <header class="roomInfo">
      <div class="big">
        <img :src="roomInfo[0].imageUrl" alt />
      </div>
      <div class="small">
        <img :src="roomInfo[1].imageUrl" alt />
        <img :src="roomInfo[2].imageUrl" alt />
      </div>
    </header>
    <div class="log">WhiteSpace</div>
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

.big {
  flex: 2 0 0;
  & img {
    width: 100%;
    height: 596px;
    object-fit: cover;
  }
}

.small {
  flex: 1 0 0;
  & img {
    width: 100%;
    height: 298px;
    object-fit: cover;
  }
}

.log {
  width: 150px;
  height: 43px;
  background-color: $gray-100;
  border: 1px solid;
  position: absolute;
  top: 42px;
  left: 63px;
}
</style>
