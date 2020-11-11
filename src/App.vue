<template>
  <div id="app" :class="{ [`page-${pageTitle}`]: true }">
    <router-view />
  </div>
</template>

<script>
// 基本 css
import "@/assets/sass/common.scss";
export default {
  name: "Home",
  data: function() {
    return {};
  },
  computed: {
    pageTitle() {
      return this.$route.meta && this.$route.meta.class
        ? this.$route.meta.class
        : "default";
    }
  },
  components: {}
};
</script>

<style lang="scss"></style>
