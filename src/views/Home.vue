<template>
  <div class="home">
    <companyContact></companyContact>
    <b-container class="room_info_area">
      <b-row>
        <roomPreview v-for="roomData in getAllRooms" :key="roomData.id" :roomInfo="roomData"></roomPreview>
      </b-row>
    </b-container>
  </div>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :test="getAllRooms" msg="Welcome to Your Vue.js App" />
  </div>-->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import companyContact from "@/components/companyContact.vue";
import roomPreview from "@/components/roomPreview.vue";
import { mapGetters } from "vuex";
// import "../assets/scss/main.scss";

export default {
  name: "Home",
  components: {
    companyContact,
    roomPreview
  },
  computed: {
    ...mapGetters(["getAllRooms"])
  }
};
</script>

<style lang="scss">
.room_info_area {
  margin-top: 98px;
  margin-bottom: 158px;
  & .room_detial:nth-child(n + 4) {
    margin-top: 58px;
  }
}
</style>
