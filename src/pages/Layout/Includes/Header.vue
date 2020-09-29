<template>
  <div class="header">
    <nav class="base-nav main">
      <a class="logo link" @click="goTo('/')">Home</a>
      <ul class="items">
        <li class="item link"><a @click="goTo('/news')">最新消息</a></li>
        <li class="item link"><a @click="goTo('/')">連結 2</a></li>
        <li class="item link"><a @click="goTo('/')">連結 3</a></li>
      </ul>
    </nav>
    <nav class="base-nav user-nav">
      <ul class="items">
        <li class="item link"><a @click="goTo('/')">連結 1</a></li>
        <li class="item link"><a @click="goTo('/')">連結 2</a></li>
        <li class="item link"><a @click="goTo('/')">連結 3</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.base-nav {
  .items {
    list-style: none;
  }

  .item {
    display: inline-block;
  }

  .item + .item {
    margin-left: 10px;
  }
}

.base-nav.main {
  display: flex;

  .items {
    padding-left: 50px;
  }
}

.link {
  cursor: pointer;
  @extend %trs-4ms;
  &:hover {
    color: #666;
  }
}
</style>
