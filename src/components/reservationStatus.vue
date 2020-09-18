<template>
  <div class="reservation_status">
    <div class="reservation_body">
      <div class="receive_title">{{ receiveState.title }}</div>
      <slot name="receive"></slot>
      <button
        class="receive_button"
        @click="$emit('reset-booking-result')"
      >{{ receiveState.buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservationStatus",
  props: {
    receiveState: {
      type: Object,
      required: true
    }
    // getIsLoading: {
    //   type: Boolean,
    //   required: true
    // }
  }
};
</script>

<style lang="scss">
.reservation_status {
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
.reservation_body {
  width: 485/1200 * 100%;
  margin: 0 auto;
  padding: 27px 43px 34px 42px;
  background-color: white;
  text-align: right;
}

.receive_title {
  text-align: left;
  font-size: 24px;
  font-family: $title-font-family;
  margin-bottom: 31px;
}
.receive_state {
  text-align: center;
  font-size: 60px;
  color: #ade8c6;
  margin-bottom: 32px;
}
.receive_button {
  color: $white;
  border: 1px solid;
  border-radius: 5px;
  background-color: #484848;
  width: 85px;
  height: 37px;
}
</style>
