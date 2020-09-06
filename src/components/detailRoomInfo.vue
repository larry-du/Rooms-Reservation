<template>
  <div class="detail_room_info">
    <div class="room_intro">
      <h1>{{roomInfo.name}}</h1>

      <section class="description">
        <span>房客人數限制： 1~1 人</span>
        <span>床型：單人床</span>
        <span>衛浴數量： 1 間</span>
        <span>房間大小： 18 平方公尺</span>
        <p>Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>
        <span>\\\</span>
        <div class="check_area">
          <div class="check_in">
            <span>Check In</span>
            <span>15:00 — 21:00</span>
          </div>
          <div class="check_out">
            <span>Check Out</span>
            <span>10:00</span>
          </div>
        </div>
      </section>
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

<style lang="scss">
.description {
  display: flex;
  flex-direction: column;
}

.check_area {
  display: flex;
  justify-content: space-between;
  width: 75%;
  & .check_in {
    display: flex;
    flex-direction: column;
  }
  & .check_out {
    display: flex;
    flex-direction: column;
  }
}
</style>>