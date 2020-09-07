<template>
  <div class="about">
    <showRoom :roomInfo="getRoom"></showRoom>
    <div class="reservation">
      <detailRoomInfo :roomInfo="getRoom" class="detail_room_info"></detailRoomInfo>
      <div class="room_price">
        <div class="nomal_price">
          <h2>NT.{{getRoom[0].normalDayPrice}}</h2>
          <span>平日(一~四)</span>
        </div>
        <div class="holiday_price">
          <h3>NT.{{getRoom[0].holidayPrice}}</h3>
          <span>假日(五~日)</span>
        </div>
      </div>
      <!-- <calendar class="calendar"></calendar> -->
      <div class="calendar_area">
        <calendar></calendar>
        <button>預約時段</button>
      </div>
    </div>
    <lightBox class="test" :roomInfo="getAllRooms"></lightBox>
  </div>
</template>

<script>
import showRoom from "@/components/showRoom.vue";
import detailRoomInfo from "@/components/detailRoomInfo.vue";
import calendar from "@/components/calendar.vue";
import lightBox from "@/components/lightBox.vue";
// import calendar from "@/components/calendar.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    showRoom,
    detailRoomInfo,
    calendar,
    lightBox
  },
  computed: {
    ...mapGetters(["getAllRooms", "getRoom"])
  }
};
</script>
<style lang="scss">
.calendar_area {
  flex: 3 0 0;
  margin-left: 37px;
  & button {
    width: 118px;
    height: 53px;
    color: $white;
    background-color: #575757;
    border: 0;
    margin-top: 26px;
  }
}
.reservation {
  width: 95%;
  margin: 47px auto 0;
  @media (min-width: 576px) {
    display: flex;
  }
}
.detail_room_info {
  flex: 5 0 0;
}
.room_price {
  flex: 1 0 0;
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
</style
>>
