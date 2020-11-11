<template>
  <div class="page-container">
    <div class="main">
      <Banner :data="banners" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Banner from "@/components/common/banner";
export default {
  name: "Index",
  components: {
    Banner
  },
  data() {
    return {
      banners: [
        {
          title: "banner1",
          url: "www.google.com",
          image: "https://picsum.photos/1920/500?v=1"
        },
        {
          title: "banner2",
          url: "www.google.com",
          image: "https://picsum.photos/1920/500?v=2"
        },
        {
          title: "banner3",
          url: "www.google.com",
          image: "https://picsum.photos/1920/500?v=3"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(["login", "logout", "getUserInfo", "checkLogin"])
  }
};
</script>

<style lang="scss" scoped>
.page-container {
}
.main {
  height: 2000px;
}
</style>
