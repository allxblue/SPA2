<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in data" :key="item.id" class="item banner">
        <dl class="banner-content">
          <dt class="title" v-text="item.title"></dt>
          <dd class="img" :style="`background-image: url(${item.image})`"></dd>
        </dl>
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
        v-if="showPagination"
      ></div>
      <div
        class="navigation-btn swiper-button-prev"
        slot="button-prev"
        v-if="showNavigation"
        @click="bannerPrev"
      ></div>
      <div
        class="navigation-btn swiper-button-next"
        slot="button-next"
        v-if="showNavigation"
        @click="bannerNext"
      ></div>
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
  props: ["data", "pagination", "navigation"],
  components: {
    Swiper,
    SwiperSlide
  },
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
        },
        swiperOption: {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      }
    };
  },
  mounted() {
    console.log("!!", this.pagination, this.navigation);
  },
  computed: {
    showPagination() {
      let show = true;
      if (typeof this.pagination !== "undefined" && !this.pagination) {
        show = false;
      }
      return show;
    },
    showNavigation() {
      let show = false;
      if (typeof this.navigation !== "undefined") {
        show = true;
      }
      return show;
    }
  },
  methods: {
    bannerPrev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    bannerNext() {
      this.$refs.mySwiper.$swiper.slideNext();
    }
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
<style lang="scss">
.navigation-btn {
  background: rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 70px;
  color: #fff;
  transition: background 1s cubic-bezier(0.23, 1, 0.32, 1);
  &:before {
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    width: 80px;
    background: rgba(0, 0, 0, 0);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:after {
    font-size: 30px;
  }

  &.swiper-button-prev {
    left: 20px;
    transition: left 0.2s ease-in-out;
    &:hover {
      left: 10px;
    }
  }

  &.swiper-button-next {
    right: 20px;
    transition: right 0.2s ease-in-out;
    &:hover {
      right: 10px;
    }
  }
}
</style>
