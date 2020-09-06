<template>
  <div class="detail_room_info">
    <div class="room_intro">
      <h1>{{roomInfo.name}}</h1>
    </div>
    <div class="room_price"></div>
  </div>
</template>
<script>
export default {
  name: "detailRoomInfo",
  props: {
    roomInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

