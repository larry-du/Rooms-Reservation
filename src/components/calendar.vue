<template>
  <div class="calendar">
    <datepicker
      :inline="true"
      :language="language"
      :disabled-dates="state.bookingDay"
    ></datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
// import { mapGetters } from "vuex";
export default {
  name: "calendar",
  data() {
    return {
      language: {
        language: "Chinese",
        months: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        monthsAbbr: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        days: ["日", "ㄧ", "二", "三", "四", "五", "六"],
        rtl: false,
        ymd: true,
        yearSuffix: "/"
      }
    };
  },
  props: {
    bookingDay: {
      type: Array,
      required: true
    }
  },
  components: {
    Datepicker
  },
  computed: {
    // ...mapGetters(["getBookingData"]),
    state() {
      // console.log(this.bookingData);
      return {
        bookingDay: {
          dates: this.bookingDay,
          customPredictor: function(date) {
            const now = Date.now();
            const totalSecondsADay = 60 * 60 * 24 * 1000;
            const totalSecondaOfNityDays = totalSecondsADay * 90;
            if (
              new Date() >= date ||
              date.getTime() > now + totalSecondaOfNityDays
            ) {
              return true;
            }
          }
        }
      };
    }
  }
};
</script>
<style lang="scss">
.calendar {
  & .vdp-datepicker__calendar {
    width: 100%;
    padding: 10px 11px 24px 22px;
    @media (min-width: 768px) {
      padding: 30px 31px 44px 42px;
    }
  }
  & .vdp-datepicker__calendar {
    border: 0;
    background-color: $gray-light;
    box-shadow: 0 2px 10px 0;
    & .cell {
      pointer-events: none;
    }
    & .disabled {
      background-image: repeating-linear-gradient(
        45deg,
        $gray-200 0px,
        $gray-200 3px,
        black 3px,
        black 4px,
        $gray-200 4px,
        $gray-200 7px
      );
    }
  }
}</style
>>
