<template>
  <div class="app-wrapper">
    <div class="app-container">
      <div class="header">
        <div class="app-inner">
          <Header />
        </div>
      </div>
      <div class="main-section">
        <div class="app-inner">
          <keep-alive>
            <router-view />
          </keep-alive>
        </div>
      </div>
      <div class="footer">
        <div class="app-inner">
          {{ `©2020 by ${siteName} ${ver} , All Rights Reserved.` }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Includes/Header";
import { mapGetters } from "vuex";
export default {
  name: "baseHF",
  components: {
    Header
  },
  data() {
    return {};
  },
  computed: {
    // 單取
    siteName() {
      return this.$store.getters.siteName;
    },
    // 多取綁定
    ...mapGetters({
      ver: "version"
    })
  }
};
</script>

<style lang="scss" scoped>
$headerH: 60px;
$footerH: 30px;
$maxW: 1600px;
// $maxW: auto;
.app-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #eee;
}

.app-inner {
  width: 80%;
}
.app-container {
  position: relative;
  margin: 0 auto;
  max-width: maxW;
  height: 100%;

  > .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    > .app-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: $headerH;
      background: #fff;
      @extend %block-shadow;
    }
  }

  > .footer {
    > .app-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      height: $footerH;
      background: #fff;
    }
  }
}

.main-section {
  min-height: calc(100vh - #{$footerH});
  padding: $headerH 0 0;
  box-sizing: border-box;
}

.app-inner {
  max-width: $maxW;
  margin: 0 auto;
}

.footer {
  color: #999;
  font-size: 13px;
}
</style>
