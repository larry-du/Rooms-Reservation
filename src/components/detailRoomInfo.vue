<template>
  <section class="detail_room_info">
    <div class="room_intro">
      <h1>{{ roomInfo.name }}</h1>
      <div class="description">
        <div class="description_text">
          <span>房客人數限制： 1~1 人</span>
          <span>床型：單人床</span>
          <span>衛浴數量： 1 間</span>
          <span>房間大小： 18 平方公尺</span>
          <p>
            Single Room is only reserved for one guest. There is a bedroom
            with a single size bed and a private bathroom. Everything you need
            prepared for you: sheets and blankets, towels, soap and shampoo,
            hairdryer are provided. In the room there is AC and of course
            WiFi.
          </p>
        </div>
        <div class="check_area">
          <div class="check_in">
            <span>Check In</span>
            <span class="check_in_time">15:00 — 21:00</span>
          </div>
          <div class="check_out">
            <span>Check Out</span>
            <span class="check_out_time">10:00</span>
          </div>
        </div>
        <div class="amenities">
          <!-- <b-row class="m-0">xs -->
          <!-- <b-col sm="4"> -->
          <div class="wifi">
            <font-awesome-icon :icon="['fas', 'wifi']" fixed-width size="lg" />
            <span>Wi-Fi</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="phone">
            <font-awesome-icon :icon="['fas', 'phone-alt']" fixed-width size="lg" />
            <span>電話</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="view">
            <font-awesome-icon :icon="['fas', 'mountain']" fixed-width size="lg" />
            <span>漂亮的視野</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="utensils">
            <font-awesome-icon :icon="['fas', 'utensils']" fixed-width size="lg" />
            <span>早餐</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="air_condition">
            <font-awesome-icon :icon="['fas', 'wind']" fixed-width size="lg" />
            <span>空調</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="no_smoking">
            <font-awesome-icon :icon="['fas', 'smoking-ban']" fixed-width size="lg" />
            <span>禁止吸煙</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="mini_bar">
            <font-awesome-icon :icon="['fas', 'glass-martini-alt']" fixed-width size="lg" />
            <span>Mini Bar</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="refrigerator">
            <font-awesome-icon :icon="['fas', 'columns']" fixed-width size="lg" />
            <span>冰箱</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="for_baby">
            <font-awesome-icon :icon="['fas', 'baby']" fixed-width size="lg" />
            <span>適合兒童</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="room_service">
            <font-awesome-icon :icon="['fas', 'concierge-bell']" fixed-width size="lg" />
            <span>Room Service</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="sofa">
            <font-awesome-icon :icon="['fas', 'couch']" fixed-width size="lg" />
            <span>沙發</span>
          </div>
          <!-- </b-col> -->
          <!-- <b-col sm="4"> -->
          <div class="for_pets">
            <font-awesome-icon :icon="['fas', 'dog']" fixed-width size="lg" />
            <span>寵物攜帶</span>
          </div>
          <!-- </b-col> -->
          <!-- </b-row>xs -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "detailRoomInfo",
  props: {
    roomInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.room_intro {
  & h1 {
    font-size: $detail-title-size;
    font-family: $title-font-family;
  }
}
.description_text {
  display: flex;
  flex-direction: column;
  font-size: $detail-sub-title-size;
  font-family: $sub-font-family;
  margin-top: 31px;
  & span + span {
    margin-top: 10px;
  }
  & p {
    margin-top: 10px;
  }
}

.amenities {
  display: grid;
  //   padding: 21px 47px 33px 30px;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: $gray;
  margin-top: 40px;
  margin-bottom: 40px;
  & span {
    font-size: 12px;
  }
  & div:nth-child(n + 4) {
    margin-top: 32px;
  }
  & svg {
    margin-right: 3px;
  }
  & .view {
    color: gray;
  }
  & .mini_bar {
    color: gray;
  }
  & .for_baby {
    color: gray;
  }
  & .room_service {
    color: gray;
  }
  & .sofa {
    color: gray;
  }
  @media (min-width: 768px) {
    padding: 21px 20px 20px 20px;
  }
  @media (min-width: 992px) {
    padding: 21px 47px 33px 30px;

    margin-bottom: 72px;
    & svg {
      margin-right: 18px;
    }
  }
}

.check_area {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-top: 20px;
  @media (min-width: 576px) {
    margin-top: 52px;
  }
  & span {
    font-size: $detail-sub-title-size;
  }
  & .check_in {
    display: flex;
    flex-direction: column;
  }
  & .check_out {
    display: flex;
    flex-direction: column;
  }
  & .check_in_time {
    font-size: $time-font-size;
  }
  & .check_out_time {
    font-size: $time-font-size;
  }
}
</style>
