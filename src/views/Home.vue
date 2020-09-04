<template>
  <div class="home">
    <companyContact :allRooms="getAllRooms"></companyContact>
    <roomInfo
      v-for="roomData in allRooms"
      :key="roomData.id"
      :roomInfo="roomdata"
    ></roomInfo>
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
import roomInfo from "@/components/roomInfo.vue";
import { mapGetters } from "vuex";
// import "../assets/scss/main.scss";

export default {
  name: "Home",
  components: {
    companyContact,
    roomInfo
  },
  props: {
    allRooms: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getAllRooms"])
  }
};
</script>
