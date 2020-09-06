<template>
  <div class="about">
    <showRoom :roomInfo="getAllRooms"></showRoom>
    <div class="reservation">
      <detailRoomInfo :roomInfo="getAllRooms[0]" class="detail_room_info"></detailRoomInfo>
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
  display: flex;
  margin-top: 47px;
}
.detail_room_info {
  flex: 4 0 0;
}
.calendar {
  flex: 3 0 0;
}
</style
>>
