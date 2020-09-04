<template>
  <b-col sm="4" class="room_detial">
    <b-card
      class="room_preview"
      no-body
      :img-src="roomInfo.imageUrl"
      :img-alt="roomInfo.name"
      img-top
      img-height="280px"
      img-width="100%"
    >
      <b-card-text class="room_info">
        <div class="room_name">
          <span>{{ roomInfo.name }}</span>
        </div>
        <div class="room_price">
          <div class="nomorl_price">
            <span>NT:{{ roomInfo.normalDayPrice }}</span>
            <span>平日</span>
          </div>
          <div class="holiday_price">
            <span>NT:{{ roomInfo.holidayPrice }}</span>
            <span>假日</span>
          </div>
        </div>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "roomPreview",
  props: {
    roomInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    test() {
      console.log(this.roomInfo.imageUrl);
    }
  }
};
</script>

<style lang="scss">
.room_preview {
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  height: 350px;
  overflow: hidden;
  display: flex;
  & img {
    object-fit: cover;
  }
}
.room_info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: $product-title-size;
  font-family: $sub-font-family;
  background-color: $gray-light;

  transition: all 0.5s;
  cursor: pointer;
  & .room_price {
    display: flex;
    justify-content: space-between;
    padding: 23px 24px 27px 30px;
  }

  &:hover {
    transform: translateY(-50%);
  }

  & .room_name {
    padding: 23px 24px 27px 30px;
  }
}

// .room_name {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// }
</style>
