<template>
  <div class="about">
    <showRoom :roomInfo="getAllRooms"></showRoom>
    <div class="reservation">
      <detailRoomInfo :roomInfo="getAllRooms[0]" class="detail_room_info"></detailRoomInfo>
      <div class="room_price">
        <div class="nomal_price">
          <h2>NT.1380</h2>
          <span>平日(一~四)</span>
        </div>
        <div class="holiday_price">
          <h3>NT.1500</h3>
          <span>假日(五~日)</span>
        </div>
      </div>
      <calendar class="calendar"></calendar>
    </div>
  </div>
</template>

<script>
import showRoom from "@/components/showRoom.vue";
import detailRoomInfo from "@/components/detailRoomInfo.vue";
import calendar from "@/components/calendar.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    showRoom,
    detailRoomInfo,
    calendar
  },
  computed: {
    ...mapGetters(["getAllRooms"])
  }
};
</script>
<style lang="scss">
.reservation {
  // display: flex;
  margin-top: 47px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 576px) {
    display: flex;
  }
}
.detail_room_info {
  flex: 5 0 0;
}
.calendar {
  margin-left: 37px;
}
.room_price {
  flex: 1 0 0;
  // margin-left: 37px;
  & span {
    font-size: $product-title-size;
    color: #6d7278;
  }
  & .nomal_price h2 {
    font-size: 30px;
  }
  & .holiday_price h3 {
    font-size: 16px;
  }
  @media (min-width: 576px) {
    margin-left: 37px;
  }
}
.calendar {
  flex: 3 0 0;
}
</style
>>
