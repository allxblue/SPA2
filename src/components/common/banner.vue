<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in data" :key="item.id" class="item banner">
        <dl class="banner-content">
          <dt class="title" v-text="item.title"></dt>
          <dd class="img" :style="`background-image: url(${item.image})`"></dd>
        </dl>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { mapGetters } from "vuex";
// "swiper": "5.4.5", 鎖版本，6.x 會有問題
export default {
  name: "banner",
  components: {
    Swiper,
    SwiperSlide
  },
  props: ["data"],
  data() {
    return {
      swiperOptions: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      env: "env"
    })
  }
};
</script>

<style lang="scss" scoped>
.banner {
  .item {
    background: #fff;

    img {
      width: 100%;
    }
  }

  .banner-content {
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
    .img {
      width: 100%;
      background-size: cover;
      &:after {
        content: "";
        width: 100%;
        padding-top: 26.041%; // 500 / 1920
        display: block;
      }
    }
    .title {
      position: absolute;
      left: 0;
      top: 0;
      width: 30%;
      display: none;
    }
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: $mainColor;
  }
}
</style>
