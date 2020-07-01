<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
    duration="200"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "loginLayout",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
