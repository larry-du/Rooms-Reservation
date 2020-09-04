<template>
  <div class="room-info"></div>
</template>

<script>
export default {
  name: "roomInfo",
  props: {
    roomInfo: {
      type: Object,
      required: true
    }
  }
};
</script>
