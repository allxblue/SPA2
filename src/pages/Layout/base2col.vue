<template>
  <div class="app-wrapper">
    <div class="app-container">
      <aside class="sidebar">
        <div class="top-area"></div>
        <nav class="nav">
          <ul class="items">
            <li class="item"><a href="#">Nav 1</a></li>
            <li class="item"><a href="#">Nav 2</a></li>
            <li class="item"><a href="#">Nav 3</a></li>
            <li class="item"><a href="#">Nav 4</a></li>
            <li class="item"><a href="#">Nav 5</a></li>
          </ul>
        </nav>
      </aside>
      <div class="top-bar">
        <div class="top-bar-inner">
          <div class="left"></div>
          <div class="right">
            User
          </div>
        </div>
      </div>
      <div class="main-section">
        <div class="content-wrapper">
          <div class="main-content">
            <keep-alive>
              <router-view />
            </keep-alive>
            <div class="footer">
              {{ `©2020 by ${siteName} ${ver} , All Rights Reserved.` }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base2col",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$topH: 60px;
$sidebarW: 234px;
$sidebarBgColor: #322e2b;
$sidebarColor: #bdbdbd;
$footerH: 20px;

ul {
  list-style: none;
}

html,
body {
  height: 100vh;
}
.app-wrapper {
  height: 100vh;
}

.app-container {
  position: relative;
  margin: 0 auto;
  height: 100%;
  background: #f5f5f5;
  width: 100%;
  padding: $topH 0 0 $sidebarW;
  box-sizing: border-box;
}

// 左邊選單區
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: $sidebarW;
  height: 100%;
  background: $sidebarBgColor;
  color: $sidebarColor;
  z-index: 1;

  .top-area {
    height: $topH;
  }
}

// 內容區
.main-section {
  position: relative;
  height: 100%;
}

.content-wrapper {
  height: 100%;
  overflow: auto;
}

.main-content {
  position: relative;
  min-height: calc(100vh - #{$topH});
  padding-bottom: $footerH;
  box-sizing: border-box;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $footerH;
  text-align: center;
}

.top-bar {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: $sidebarW;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  height: $topH;
  background: #fff;
  display: flex;
  box-sizing: border-box;

  .top-bar-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left {
  }

  .right {
    padding-right: 20px;
  }
}

.nav {
  .items {
    width: 100%;
  }
  // 不會重複就拆少層，以後要覆寫比較好寫
  .item {
    width: 100%;
    & + .item {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    a {
      display: block;
      text-align: center;
      padding: 15px 10px;
      box-sizing: border-box;
      text-decoration: none;
      color: #fff;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
