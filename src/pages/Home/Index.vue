<template>
  <div class="page-container">
    <div class="main">
      Index
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Index",

  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions(["login", "logout", "getUserInfo", "checkLogin"])
  },
};
</script>

<style lang="scss" scoped>
.page-container {
}
.main {
  height: 2000px;
}
</style>
