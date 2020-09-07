<template>
  <div class="calendar">
    <datepicker :inline="true"></datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "calendar",
  data() {
    return {
      date: Date.now()
    };
  },
  components: {
    Datepicker
  }
};
</script>
<style lang="scss">
.calendar {
  & .vdp-datepicker__calendar {
    width: 100%;
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
