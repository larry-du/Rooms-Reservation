<template>
  <section class="detail_room_info">
    <div class="room_intro">
      <h1>{{ roomInfo[0].name }}</h1>
      <div class="description">
        <div class="description_text">
          <span
            >房客人數限制： {{ roomInfo[0].descriptionShort.GuestMin }}~{{
              roomInfo[0].descriptionShort.GuestMax
            }}
            人</span
          >
          <span>床型：{{ roomInfo[0].descriptionShort.Bed[0] }}</span>
          <span
            >衛浴數量：
            {{ roomInfo[0].descriptionShort["Private-Bath"] }} 間</span
          >
          <span
            >房間大小：
            {{ roomInfo[0].descriptionShort.Footage }} 平方公尺</span
          >
          <p>{{ roomInfo[0].description }}</p>
        </div>
        <div class="check_area">
          <div class="check_in">
            <span>Check In</span>
            <span class="check_in_time"
              >{{ roomInfo[0].checkInAndOut.checkInEarly }} —
              {{ roomInfo[0].checkInAndOut.checkInLate }}</span
            >
          </div>
          <div class="check_out">
            <span>Check Out</span>
            <span class="check_out_time">{{
              roomInfo[0].checkInAndOut.checkOut
            }}</span>
          </div>
        </div>
        <div class="amenities">
          <div
            class="wifi"
            :class="{ provided: roomInfo[0].amenities['Wi-Fi'] }"
          >
            <font-awesome-icon :icon="['fas', 'wifi']" fixed-width size="lg" />
            <span>Wi-Fi</span>
          </div>
          <div
            class="phone"
            :class="{ provided: roomInfo[0].amenities.Television }"
          >
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              fixed-width
              size="lg"
            />
            <span>電話</span>
          </div>
          <div
            class="view"
            :class="{ provided: roomInfo[0].amenities['Great-View'] }"
          >
            <font-awesome-icon
              :icon="['fas', 'mountain']"
              fixed-width
              size="lg"
            />
            <span>漂亮的視野</span>
          </div>
          <div
            class="breakfast"
            :class="{ provided: roomInfo[0].amenities.Breakfast }"
          >
            <font-awesome-icon
              :icon="['fas', 'utensils']"
              fixed-width
              size="lg"
            />
            <span>早餐</span>
          </div>
          <div
            class="air_condition"
            :class="{ provided: roomInfo[0].amenities['Air-Conditioner'] }"
          >
            <font-awesome-icon :icon="['fas', 'wind']" fixed-width size="lg" />
            <span>空調</span>
          </div>
          <div
            class="smoking"
            :class="{ provided: roomInfo[0].amenities['Smoke-Free'] }"
          >
            <font-awesome-icon
              :icon="['fas', 'smoking-ban']"
              fixed-width
              size="lg"
            />
            <span>禁止吸煙</span>
          </div>
          <div
            class="mini_bar"
            :class="{ provided: roomInfo[0].amenities['Mini-Bar'] }"
          >
            <font-awesome-icon
              :icon="['fas', 'glass-martini-alt']"
              fixed-width
              size="lg"
            />
            <span>Mini Bar</span>
          </div>
          <div
            class="refrigerator"
            :class="{ provided: roomInfo[0].amenities.Refrigerator }"
          >
            <font-awesome-icon
              :icon="['fas', 'columns']"
              fixed-width
              size="lg"
            />
            <span>冰箱</span>
          </div>
          <div
            class="for_baby"
            :class="{ provided: roomInfo[0].amenities['Child-Friendly'] }"
          >
            <font-awesome-icon :icon="['fas', 'baby']" fixed-width size="lg" />
            <span>適合兒童</span>
          </div>
          <div
            class="room_service"
            :class="{ provided: roomInfo[0].amenities['Room-Service'] }"
          >
            <font-awesome-icon
              :icon="['fas', 'concierge-bell']"
              fixed-width
              size="lg"
            />
            <span>Room Service</span>
          </div>
          <div class="sofa" :class="{ provided: roomInfo[0].amenities.Sofa }">
            <font-awesome-icon :icon="['fas', 'couch']" fixed-width size="lg" />
            <span>沙發</span>
          </div>
          <div
            class="for_pets"
            :class="{ provided: roomInfo[0].amenities['Pet-Friendly'] }"
          >
            <font-awesome-icon :icon="['fas', 'dog']" fixed-width size="lg" />
            <span>寵物攜帶</span>
          </div>
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
      type: Array,
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
  color: gray;
  & span {
    font-size: 12px;
  }
  & div:nth-child(n + 4) {
    margin-top: 32px;
  }
  & svg {
    margin-right: 3px;
  }
  & .provided {
    color: black;
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
