<template>
  <div class="about">
    <showRoom
      @open-light-box="openLightBox = true"
      :roomInfo="getRoom"
    ></showRoom>
    <div class="reservation">
      <detailRoomInfo
        :roomInfo="getRoom"
        class="detail_room_info"
      ></detailRoomInfo>
      <div class="room_price">
        <div class="nomal_price">
          <h2>NT.{{ getRoom[0].normalDayPrice }}</h2>
          <span>平日(一~四)</span>
        </div>
        <div class="holiday_price">
          <h3>NT.{{ getRoom[0].holidayPrice }}</h3>
          <span>假日(五~日)</span>
        </div>
      </div>
      <div class="calendar_area">
        <calendar :bookingDay="getBookingDay"></calendar>
        <button @click="openBookingPage = true">預約時段</button>
      </div>
    </div>
    <lightBox
      v-show="openLightBox"
      :roomInfo="getRoom"
      @cancel-light-box="openLightBox = false"
    ></lightBox>
    <bookingPage
      v-show="openBookingPage"
      @update:order="booking = $event"
      @save-order="
        saveToVuex(),
          (openBookingPage = false),
          (booking = resetData),
          $store.commit('changeLoadingState', true)
      "
      @cancel-order="(booking = resetData), (openBookingPage = false)"
      :bookingData="booking"
      :roomInfo="getRoom"
      :bookingDay="getBookingDay"
    ></bookingPage>
    <b-overlay
      :show="getIsLoading"
      class="position-fixed"
      :class="{ position_middle: getIsLoading }"
    ></b-overlay>
    <reservationStatus
      :receiveState="receiveState"
      :getIsLoading="getIsLoading"
      v-if="getReceiveState"
      @reset-booking-result="$store.commit('resetBookingResult')"
    >
      <div class="receive" slot="receive">
        <!-- <div class="receive_title">預約成功</div> -->
        <div class="receive_state">
          <font-awesome-icon
            :icon="['far', 'check-circle']"
            fixed-width
            size="lg"
            v-if="getReceiveState === 'success'"
          />
          <span v-if="getReceiveState === 'fail'">預約時間已被人預訂</span>
        </div>
        <!-- <button class="receive_button">回首頁</button> -->
      </div>
    </reservationStatus>
    <!-- </b-overlay> -->
  </div>
</template>

<script>
import showRoom from "@/components/showRoom.vue";
import detailRoomInfo from "@/components/detailRoomInfo.vue";
import calendar from "@/components/calendar.vue";
import lightBox from "@/components/lightBox.vue";
import bookingPage from "@/components/bookingPage.vue";
import reservationStatus from "@/components/reservationStatus.vue";
import { mapGetters } from "vuex";
export default {
  name: "About",
  mounted() {
    const escEvent = () => {
      this.escEventListener(event);
    };
    document.addEventListener("keyup", escEvent);

    this.$once("hook:beforeDestroy", function() {
      document.removeEventListener("keyup", escEvent);
    });
  },
  data() {
    return {
      openLightBox: null,
      openBookingPage: null,
      // openBookingResultPage: null,
      booking: {}
    };
  },
  components: {
    showRoom,
    detailRoomInfo,
    calendar,
    lightBox,
    bookingPage,
    reservationStatus
  },
  methods: {
    escEventListener(event) {
      if (event.key === "Escape") {
        this.openLightBox = false;
        this.openBookingPage = false;
      }
    },
    saveToVuex() {
      this.$store.dispatch("createBooking", {
        bookingData: this.booking,
        roomID: this.getRoom[0].id
      });
    }
  },
  computed: {
    ...mapGetters([
      "getAllRooms",
      "getRoom",
      "getBookingDay",
      "getReceiveState",
      "getIsLoading"
    ]),
    resetData() {
      return {
        name: "",
        tel: "",
        date: []
      };
    },
    receiveState() {
      return this.getReceiveState === "success"
        ? {
            title: "預約成功",
            buttonText: "回頁面"
          }
        : {
            title: "預約失敗",
            buttonText: "返回"
          };
    }
  }
};
</script>
<style lang="scss">
.calendar_area {
  flex: 3 0 0;
  @media (min-width: 576px) {
    margin-left: 37px;
  }
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
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
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
}
.position_middle {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
