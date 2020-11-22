<template>
  <div class="main">
    <div class="container">
      <div class="swiper-box">
        <div class="menu-box">
          <ul>
            <li class="item" v-for="(item, index) in menuList" :key="index">
              <p>{{ item.name }}</p>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
              <div class="children">
                <ul v-if="item.list.length">
                  <li
                    class="children-item"
                    v-for="(item2, index) in item.list"
                    :key="index"
                    @click="goToDetail(item2.id)"
                  >
                    <img :src="item2.img" class="phone" />
                    <span class="text">{{ item2.name }}</span>
                  </li>
                </ul>
                <no-data v-else />
              </div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <router-link :to="'/productDetail/' + item.id">
              <img :src="item.image" />
            </router-link>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          class="image"
          :href="'/productDetail/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img :src="item.img" />
        </a>
      </div>
      <div class="banner">
        <router-link to="/productDetail/30">
          <img src="/imgs/banner-1.png" />
        </router-link>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <div class="title-container">
          <span class="name">手机</span>
          <span class="btn">
              <p>查看全部</p>
              <i class="fa fa-chevron-circle-right" aria-hidden="true"></i> 
            </span>
        </div>
        <div class="content">
          <div class="left-image">
            <img src="/imgs/mix-alpha.jpg" />
          </div>
          <div class="phoneMsg">
            <ul>
              <li class="item" v-for="(item, index) in phoneList" :key="index">
                <img :src="item.mainImage" class="image" />
                <p class="name">{{ item.name }}</p>
                <p class="describe">{{ item.subtitle }}</p>
                <p class="price">{{ item.price | fixPrice }}元起</p>
                <div class="add-cart" @click="addCartFun">加入购物车</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <add-cart ref="cartDom" textValue='成功加入购物车，在挑挑喜欢的物品吧！' @goToCart="toCart"/>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { menuList, adsList, slideList } from "../AnalogData";
import noData from "../components/NoData";
import AddCart from '../components/AddCart'
import { fixNumber } from "../util/index";
export default {
  data() {
    return {
      menuList,
      adsList,
      slideList,
      phoneList: [],
      swiperOption: {
        loop: true,
        effect: "coverflow",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {
    this.getPhoneMsg();
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ path: "/productDetail/" + id });
    },
    async getPhoneMsg() {
      let res = await this.axios.get("/products", {
        params: {
          categoryId: 100012,
          pageSize: 15,
        },
      });
      this.phoneList = res.data.list.slice(6, 14);
      console.log(this.phoneList);
    },
    toCart(){
      this.$router.push('/cart');
    },
    addCartFun(){
      this.$refs.cartDom.flag = true;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    noData,
    AddCart
  },
  directives: {
    swiper: directive,
  },
  filters: {
    fixPrice(value) {
      return fixNumber(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.main {
  .container {
    .swiper-box {
      position: relative;
      .menu-box {
        box-sizing: border-box;
        padding: 26px 0;
        position: absolute;
        width: 264px;
        height: 451px;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.4);
        z-index: 10;
        ul {
          font-size: 16px;
          .item {
            @include flex(space-between);
            height: 42px;
            padding: 0 40px;
            &:hover {
              background-color: $colorA;
              .children {
                display: inline;
              }
            }
            p {
              color: #ffffff;
            }
            .fa-chevron-right {
              color: #ffffff;
            }
            .children {
              display: none;
              box-sizing: border-box;
              position: absolute;
              left: 264px;
              top: 0;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              border: 1px solid $colorH;
              padding: 13px 0;
              ul {
                @include flex("");
                flex-wrap: wrap;
                .children-item {
                  @include flex("", center);
                  box-sizing: border-box;
                  width: 240px;
                  height: 76px;
                  padding: 18px 20px;
                  cursor: pointer;
                  .phone {
                    margin-right: 12px;
                    width: 40px;
                    height: 40px;
                  }
                  &:hover {
                    color: $colorA;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container {
        width: auto;
        height: 451px;
        .swiper-button-prev {
          position: absolute;
          left: 274px;
        }
        img {
          width: 100%;
          width: 100%;
        }
      }
    }
    .ads-box {
      margin-top: 14px;
      .image {
        display: inline-block;
        margin-right: 14px;
        &:last-child {
          margin: 0;
        }
        img {
          width: 296px;
          height: 170px;
        }
      }
    }
    .banner {
      margin: 22px 0;
      a {
        display: inline-block;
        img {
          width: 1226px;
          height: auto;
        }
      }
    }
  }
  .product-box {
    background-color: #f5f5f5;
    .title-container {
      @include flex(space-between);
      margin: 0;
      height: 57px;
      font-size: 22px;
      font-weight: 200;
      color: #333;
      .btn{
        @include flex();
        font-size: 16px;
        transition: .3s;
        cursor: pointer;
        &:hover{
          color: $colorA;
          transition: .3s;
          .fa{
            color: $colorA;
          }
        }
        .fa{
          margin-left: 5px;
          color:  #b0b0b0;
          transition: .3s;
        }
      }
    }
    .content {
      @include flex("", "");
      .left-image {
        height: 614px;
        transition: 0.3s;
        &:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: translate3d(0, -2px, 0);
          transition: 0.3s;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .phoneMsg {
        ul {
          @include flex();
          flex-wrap: wrap;
          .item {
            position: relative;
            @include flex();
            flex-direction: column;
            margin-left: 14px;
            margin-bottom: 14px;
            width: 234px;
            height: 260px;
            padding: 20px 0;
            background: #fff;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s;
            &:hover {
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
              transform: translate3d(0, -2px, 0);
              transition: 0.5s;
              .add-cart{
                bottom: 30px;
                // background-color: #f25807;
                // transition: .3s;
              }
            }
            .image {
              margin: 0 auto 18px;
              width: 160px;
              height: 160px;
            }
            .name {
              margin: 0 10px 2px;
              font-size: 14px;
              font-weight: 400;
              color: #333;
            }
            .describe {
              margin: 0 10px 10px;
              height: 18px;
              font-size: 12px;
              color: #b0b0b0;
            }
            .price {
              margin: 0 10px 14px;
              font-size: $fontJ;
              color: $colorA;
            }
            .add-cart{
              @include flex();
              position: absolute;
              bottom: -100px;
              left: 50%;
              width: 120px;
              height: 30px;
              color: $colorA;
              border: 1px solid $colorA;
              background-color: #fff;
              transform: translateX(-50%);
              transition: .3s;
              &:hover{
                background-color: $colorA;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
