<template>
  <div class="booking_page">
    <div class="booking">
      <div class="inser_area">
        <p class="title">預約時段</p>
        <div class="your_name">
          <label for="name">姓名</label>
          <input
            type="text"
            class="name"
            :class="{ textFormatError: isNameError && bookingData.name }"
            @input="checkNameFormat($event)"
            id="name"
            :value="bookingData.name"
          />
        </div>
        <div class="your_number">
          <label for="phone">電話</label>
          <input
            type="text"
            id="phone"
            class="phone"
            :class="{ phoneFormatError: isPhoneError && bookingData.phone }"
            :value="bookingData.tel"
            @input="checkPhoneFormat($event)"
          />
        </div>
        <div class="appointment_date">
          <span>預約起迄</span>
          <div class="date">
            <datepicker
              placeholder="startDate"
              :language="language"
              class="start"
              :format="dateFormat"
              v-model="startDay"
              :disabled-dates="state.disabledBeforeToday"
            ></datepicker>
            <!-- <input type="date" v-model="startDay" /> -->
            <span class="wave">~</span>
            <datepicker
              placeholder="endDate"
              class="end"
              :language="language"
              :format="dateFormat"
              v-model="endDay"
              @input="countDays"
              :disabled-dates="state.disableBeforeStartDay"
            ></datepicker>
            <!-- <input type="date" class="end" v-model="endDay" /> -->
          </div>
        </div>
      </div>
      <div class="statement">
        <div class="nomarl_day">
          <span>平日時段</span>
          <span>{{ normalDay }} 夜</span>
        </div>
        <div class="holiday">
          <span>假日時段</span>
          <span>{{ holiday }} 夜</span>
        </div>
      </div>
      <div class="total_price">
        <span>= NT.{{ totalPrice }}</span>
      </div>
      <div class="check_state">
        <button class="cancel" @click="cancelOrder">取消</button>
        <button class="save" :disabled="isFormatError" @click="$emit('save-order')">確定預約</button>
      </div>
    </div>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
export default {
  name: "bookingPage",
  components: {
    datepicker
  },
  data() {
    return {
      dateFormat: "yyyy-MM-dd",
      isNameError: true,
      isPhoneError: true,
      startDay: "",
      endDay: "",
      normalDay: 0,
      holiday: 0,
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
    bookingData: {
      type: Object,
      required: true
    },
    roomInfo: {
      type: Array,
      required: true
    },
    bookingDay: {
      type: Array,
      required: true
    }
  },
  methods: {
    checkNameFormat(event) {
      const reg = /^[\u4e00-\u9fa5_A-z\s]+$/;
      const currentText = event.target.value;
      currentText.match(reg) && currentText !== ""
        ? (this.isNameError = false)
        : (this.isNameError = true);
      this.$emit("update:order", {
        ...this.bookingData,
        name: currentText
      });
    },
    checkPhoneFormat(event) {
      const reg = /^[0-9]+$/;
      const currentText = event.target.value;
      currentText.match(reg) && currentText !== ""
        ? (this.isPhoneError = false)
        : (this.isPhoneError = true);
      this.$emit("update:order", {
        ...this.bookingData,
        tel: currentText
      });
    },
    cancelOrder() {
      this.isNameError = true;
      this.isPhoneError = true;
      this.startDay = "";
      this.endDay = "";
      this.normalDay = 0;
      this.holiday = 0;
      this.$emit("cancel-order");
    },
    housingDay() {
      const perDay = 1;
      const housingDayArray = Array(this.getTotalDays.totalDays)
        .fill(perDay)
        .map((oneDay, i) => {
          if (i >= oneDay) {
            this.getTotalDays.startDay.setDate(
              this.getTotalDays.startDay.getDate() + oneDay
            );
          }
          return this.getTotalDays.startDay
            .toLocaleDateString("zh-Hans-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })
            .split("/")
            .join("-");
        });
      this.$emit("update:order", {
        ...this.bookingData,
        date: housingDayArray
      });
      return housingDayArray;
    },
    countDays() {
      this.holiday = 0;
      this.normalDay = 0;
      this.$nextTick(function() {
        if (this.getTotalDays.startDay < this.getTotalDays.endDay) {
          const housingDayArray = this.housingDay();
          housingDayArray.pop();
          housingDayArray
            .map(day => {
              return new Date(day).getDay();
            })
            .forEach(element => {
              if (element === 5 || element === 6 || element === 0) {
                this.holiday += 1;
              } else {
                this.normalDay += 1;
              }
            });
        }
      });
    }
  },
  computed: {
    isFormatError() {
      return this.isNameError || this.isPhoneError;
    },
    getTotalDays() {
      const start = new Date(this.startDay);
      const end = new Date(this.endDay);
      return {
        totalDays: new Date(end.getTime() - start.getTime()).getDate(),
        startDay: start,
        endDay: end
      };
    },
    totalPrice() {
      const normalPrice = this.roomInfo[0].normalDayPrice;
      const holidayPrice = this.roomInfo[0].holidayPrice;
      return normalPrice * this.normalDay + holidayPrice * this.holiday;
    },
    state() {
      return {
        disabledBeforeToday: {
          dates: this.bookingDay,
          customPredictor: function(date) {
            if (new Date() >= date) {
              return true;
            }
          }
        },
        disableBeforeStartDay: {
          to: new Date(this.startDay),
          dates: [new Date(this.startDay), ...this.bookingDay]
          // customPredictor: function() {
          //   if (!this.startDay) {
          //     return true;
          //   }
          // }
        }
      };
    }
  }
};
</script>

<style lang="scss">
.booking_page {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.booking {
  width: 485/1200 * 100%;
  margin: 0 auto;
  padding-top: 27px;
  padding-bottom: 34px;
  background-color: white;
}
.inser_area {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  font-size: $detail-sub-title-size;
  font-family: $title-font-family;

  & .title {
    margin-bottom: 50px;
    font-size: 24px;
  }
  & .your_name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      flex: 0 1 80%;
      border: 2px solid $gray;
      border-radius: 5px;
    }
    .name:focus {
      outline: none;
    }
    & .textFormatError {
      border-color: red;
    }
  }
  & .your_number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .phone {
      flex: 0 1 80%;
      border: 2px solid $gray;
      border-radius: 5px;
    }
    .phone:focus {
      outline: none;
    }
    & .phoneFormatError {
      border-color: red;
    }
  }
}

.inser_area div + div {
  margin-top: 15px;
}

.appointment_date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .date {
    display: flex;
    flex: 0 1 80%;
    & input {
      width: 100%;
    }
    & .wave {
      // display: inline-block;
      width: 10%;
      text-align: center;
    }
  }
  & .start {
    width: 45%;
    border: 2px solid $gray;
    border-radius: 5px;
  }
  & .end {
    width: 45%;
    border: 2px solid $gray;
    border-radius: 5px;
  }
}

.statement {
  background-color: #ededed;
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 18px;
  font-size: 12px;
  color: #6d7278;
  & .nomarl_day {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
  & .holiday {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    margin-top: 15px;
  }
}

.total_price {
  text-align: right;
  width: 80%;
  margin: 0 auto;
  margin-top: 8px;
  color: red;
  font-size: 26px;
  & span {
    vertical-align: middle;
  }
}

.check_state {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 29px;
  & button {
    font-size: 14px;
    border: 0;
  }
  & .cancel {
    width: 78px;
    height: 37px;
    color: #6d7278;
  }
  & .save {
    width: 107px;
    height: 37px;
    color: white;
    background-color: #484848;
  }
  & button:disabled {
    background-color: $gray;
  }
}
</style
>>
