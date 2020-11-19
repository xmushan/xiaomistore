<template>
  <div class="main">
    <div class="container">
      <div class="swiper-box">
        <div class="menu-box">
          <ul>
            <li class="item">
              <p>手机 电话卡</p>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <router-link :to="'/productDetail/' + item.id">
              <img :src="item.image">
            </router-link>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
export default {
  data () {
    return {
      slideList: [
        {
          id: '42',
          image: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          image: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          image: '/imgs/slider/slide-3.jpg'
        }
      ],
      swiperOption: {
        loop: true,
        effect: 'coverflow',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  methods: {
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.main{
  .container{
    .swiper-box{
      position: relative;
      .menu-box{
        box-sizing: border-box;
        padding: 26px 0;
        position: absolute;
        width: 264px;
        height: 451px;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: .4);
        z-index: 10;
        ul{
          font-size: 16px;
          .item{
            @include flex(space-between);
            height: 50px;
            padding: 0 40px;
            &:hover{
              background-color: $colorA;
            }
            p{
              color: #ffffff;
            }
            .fa-chevron-right{
              color: #ffffff;
            }
          }
        }
      }
      .swiper-container {
        width: auto;
        height: 451px;
        .swiper-button-prev{
          position: absolute;
          left:  274px;
        }
        img{
          width: 100%;
          width: 100%;
        }
      }  
    }
  }
}
</style>
