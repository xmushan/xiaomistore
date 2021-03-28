<template>
  <div class="productDetail">
    <div class="navWrapper">
      <div class="container flex-x-between">
        <div class="titleConfig flex-x-center">
          <span class="bold">小米8</span>
          <span>小米8</span>
          <span>小米8</span>
        </div>
        <div class="flex-x-center">
          <span>概述</span>
          <span>参数</span>
          <span>用户评价</span>
          <span class="addBtn flex-x-center">加入购物车</span>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <div class="coverPc">
        <div class="title">
          <div class="name">小米8</div>
          <div class="des">8周年旗舰版</div>
        </div>
        <div class="profile">
          <span>全球首款双频 GPS</span>
          <span>骁龙845</span>
          <span>AI 变焦双摄</span>
          <span>红外人脸识别</span>
        </div>
        <div class="price flex-x-center">
          <div class="currentPrice">¥ 2599</div>
          <div class="lastPrice">¥3599</div>
        </div>
      </div>
    </div>
    <div class="profileBanner">
      <div class="coverPc container"></div>
    </div>
    <div class="productBg"></div>
    <div class="swrper-container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          ><img src="/imgs/product/gallery-2.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-3.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-4.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-5.jpg" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="/imgs/product/gallery-6.jpg" alt=""
        /></swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
    <div class="text flex-x-center">小米8 AI变焦双摄拍摄</div>
    <div class="videoWrapper">
      <div class="container bcg flex-y-center">
        <div class="boldText">60帧超慢动作摄影</div>
        <div class="boldText" style="margin-bottom: 26px">
          慢慢回味每一瞬间的精彩
        </div>
        <div class="primary">
          <div class="primaryText">
            后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          </div>
          <div class="primaryText">
            更能AI 精准分析视频内容，15个场景智能匹配背景音效。
          </div>
        </div>
        <div class="flex-x-center">
          <div class="videoImg" @click="videVisible = true"></div>
        </div>
      </div>
    </div>

    <div class="mask" @click.prevent="videVisible = false" v-if="videVisible">
      <transition name="fade">
        <div class="videoBox" v-if="videVisible">
          <video
            src="../../public/imgs/product/video.mp4"
            muted
            autoplay
            controls="controls"
          ></video>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          bulletElement: "li",
          clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      },
      videVisible: false,
    };
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
    async getProductDetail() {
      console.log(this.$route.params);
      let { productId } = this.$route.params;
      let res = await this.axios.get(`/products/${productId}`);
      console.log(res, "34");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";

.productDetail {
  .bold {
    padding-left: 0px;
    font-size: 18px;
    color: #333333;
  }

  span {
    position: relative;
    padding: 0 10px;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 11px;
      background-color: #999;
    }

    &:last-child::after {
      display: none;
    }
  }

  .navWrapper {
    padding: 28px 0;
    border-top: 1px solid #e5e5e5;

    .titleConfig {
      font-size: 12px;
      font-weight: bold;
      color: #666666;
    }
    .addBtn {
      margin-left: 10px;
      padding: 9px 30px;
      background: #ff7301;
      font-size: 12px;
      color: #fff;
      cursor: pointer;

      &::after {
        display: none;
      }
    }
  }

  .bannerWrapper {
    margin-bottom: 38px;
    .coverPc {
      height: 718px;
      text-align: center;
      background: url("../../public/imgs/index2 (1).png") no-repeat;
      background-size: cover;
      background-position-x: center;

      .title {
        margin-bottom: 21px;
        padding-top: 36px;
        font-weight: bold;
        color: #333333;
        .name {
          font-size: 80px;
        }
        .des {
          font-size: 24px;
          letter-spacing: 13px;
        }
      }
      .price {
        margin-top: 20px;
        font-weight: bold;
        color: #333333;
        .currentPrice {
          font-size: 38px;
        }
        .lastPrice {
          margin-left: 8px;
          font-size: 26px;
          text-decoration-line: line-through;
        }
      }
    }
  }

  .profileBanner {
    .coverPc {
      height: 397px;
      background: url("../../public/imgs/profile.png") no-repeat;
      background-size: contain;
      background-position-y: center;
    }
  }
  .swrper-container {
    margin: 36px auto 58px;
    img {
      width: 100%;
    }
    .swiper-pagination {
      margin-top: 31px;
      left: 50%;
      transform: translateX(-50%);
      .swiper-pagination-bullet {
        background: #666;
        border-radius: 0px;
      }
      li {
        margin: 0 10px;
        width: 29px;
        height: 3px;
        background: #cccccc;
      }
    }
  }
  .text {
    margin-bottom: 29px;
    font-size: 10px;
    font-weight: bold;
    color: #333333;
  }
  .productBg {
    height: 500px;
    background: url("../../public/imgs/product/product-bg-3.png") no-repeat;
    background-size: cover;
  }
  .videoWrapper {
    box-sizing: content-box;
    background: #070708;

    .bcg {
      padding: 46px 0;
      .boldText {
        font-size: 34px;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
      }

      .primary {
        margin-bottom: 33px;
        .primaryText {
          font-size: 14px;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
        }
      }

      .videoImg {
        width: 690px;
        height: 304px;
        background: url("../../public/imgs/product/gallery-1.png") no-repeat;
        background-size: contain;
        cursor: pointer;
      }
    }
  }

  .mask {
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 60;
    .videoBox {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1000px;
      height: 536px;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none;
      }
    }
  }
}
</style>