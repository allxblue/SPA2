<template>
  <div class="app-wrapper">
    <div class="app-container">
      <aside class="sidebar">
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

      <div class="app-content">
        <div class="main-wrapper">
          <div class="top-bar">
            上方
          </div>
          <div class="content-wrapper">
            <div class="main-content">
              內容放這
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
  width: 80%;
  height: 100%;
  max-width: 1600px;
  background: #ccc;
}

// 左邊選單區
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

// 內容區
.app-content {
  position: relative;
  padding-left: 210px; // 200(側邊欄寬) + 10px (邊距)
  height: 100%;
}

// 主區塊(拆上下)
.main-wrapper {
  position: relative;
  padding-top: 110px; // 100(.top-bar高度) + 10px (邊距)
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}

// 上方區塊定住
.top-bar {
  position: absolute;
  width: 100%;
  top: 0;
  height: 100px;
  background: rgba(15, 37, 45, 0.25);
}

// 中間區塊定住(再拆內層)
.content-wrapper {
  height: 100%;
  background: #caf;
  overflow: auto;
}

.main-content {
  height: 200%;
}

.nav {
  .items {
  }
  // 不會重複就拆少層，以後要覆寫比較好寫
  .item {
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
