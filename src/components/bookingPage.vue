<template>
  <div class="booking_page">
    <div class="booking">
      <div class="inser_area">
        <p class="title">預約時段</p>
        <div class="your_name">
          <label for="name">姓名</label>
          <input type="text" id="name" />
        </div>
        <div class="your_number">
          <label for="phone">電話</label>
          <input type="text" id="phone" />
        </div>
        <div class="appointment_date">
          <span>預約起迄</span>
          <div class="date">
            <input type="date" class="star" />
            <span>~</span>
            <input type="date" class="end" />
          </div>
        </div>
      </div>
      <div class="statement">
        <div class="nomarl_day">
          <span>平日時段</span>
          <span>1 夜</span>
        </div>
        <div class="holiday">
          <span>假日時段</span>
          <span>1 夜</span>
        </div>
      </div>
      <div class="total_price">
        <span>= NT.2850</span>
      </div>
      <div class="check_state">
        <button class="cancel">取消</button>
        <button class="save">確定預約</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingPage"
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
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
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
    #name {
      flex: 0 1 80%;
      border: 2px solid $gray;
      border-radius: 5px;
    }
  }
  & .your_number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #phone {
      flex: 0 1 80%;
      border: 2px solid $gray;
      border-radius: 5px;
    }
  }
}

.inser_area div:nth-child(n + 3) {
  margin-top: 15px;
}

.appointment_date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .date {
    flex: 0 1 80%;
    & span {
      display: inline-block;
      width: 10%;
      text-align: center;
    }
  }
  & .star {
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
}
</style>>