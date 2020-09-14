<template>
  <div class="calendar">
    <datepicker :inline="true" :language="language" :disabled-dates="state.bookingDay"></datepicker>
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
  created() {
    console.log(this.bookingDay);
  },
  computed: {
    // ...mapGetters(["getBookingData"]),
    state() {
      // console.log(this.bookingData);
      return {
        bookingDay: {
          dates: this.bookingDay
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
  }
}
</style
>>
