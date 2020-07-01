<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "card",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
  created() {}
};
</script>
<style lang="scss">
.card {
  background: #343c4a;
  color: #d0d0d0;
  padding: 10px;
  border-radius: 2px;
}
</style>
