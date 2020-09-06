<template>
  <div class="about">
    <showRoom :roomInfo="getAllRooms"></showRoom>
    <div class="reservation">
      <detailRoomInfo :roomInfo="getAllRooms"></detailRoomInfo>
    </div>
  </div>
</template>

<script>
import showRoom from "@/components/showRoom.vue";
import detailRoomInfo from "@/components/detailRoomInfo.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    showRoom,
    detailRoomInfo
  },
  computed: {
    ...mapGetters(["getAllRooms"])
  }
};
</script>
>
