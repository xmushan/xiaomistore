<template>
  <div class="header">
    <!-- 顶部菜单 -->
    <div class="top_bar">
      <div class="container">
        <!-- 左侧菜单 -->
        <div class="menu">
          <a :href="item.src" v-for="(item, index) in menuTitle" :key="index">{{
            item.name
          }}</a>
        </div>
        <!-- 右侧用户信息 -->
        <div class="user">
          <div v-if="!userInfo" class="userInfo">
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </div>
          <div v-else>
            <a href="javascript:;">{{ userInfo.username }}</a>
            <a href="javascript:;">我的订单</a>
            <a href="javascript:;" @click="loginOut">退出</a>
          </div>
          <router-link to="/cart" class="cart">
            <span class="icon_cart"></span>
            <p>购物车({{ cartCount }})</p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 商品菜单 -->
    <div class="top_header">
      <div class="container">
        <div class="logo">
          <a href="/home"></a>
        </div>
        <div class="menu">
          <div class="item">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in miPhone"
                  :key="index"
                >
                  <a :href="'/productDetail/' + item.id" target="_blank">
                    <div class="image">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="price">
                      ¥{{ item.price | toFixNumber }}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item">
            <span>红米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in reMiList"
                  :key="index"
                >
                  <a :href="'/productDetail/' + item.id" target="_blank">
                    <div class="image">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="price">¥{{ item.price | toFixNumber }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item">
            <span>电视</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in tvList"
                  :key="index"
                >
                  <a :href="'/productDetail/' + item.id" target="_blank">
                    <div class="image">
                      <img :src="item.mainImage" alt="" />
                    </div>
                    <div class="name">{{ item.name }}</div>
                    <div class="price">¥{{ item.price | toFixNumber }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="search">
          <input
            class="input"
            type="text"
            placeholder="小米10pro"
            v-model.trim="keyword"
            @keyup.enter="getProduct(keyword)"
          />
          <input type="button" class="span" @click="getProduct(keyword)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fixNumber } from "../util/index";
export default {
  props: {
    menuTitle: {
      type: Array,
      default: () => {
        return [
          {
            name: "小米商城",
            src: "/home",
          },
          {
            name: "MIUI",
            src: "https://home.miui.com/",
          },
          {
            name: "下载APP",
            src: "https://www.mi.com/appdownload",
          },
          {
            name: "协议规则",
            src: "https://www.mi.com/aptitude/list",
          },
          {
            name: "智能生活",
            src: "https://xiaomishare.mi.com/?from=micom#/",
          },
          {
            name: "GitHub",
            src: "https://github.com/",
          },
        ];
      },
    },
  },
  data() {
    return {
      userInfo: JSON.parse(window.sessionStorage.getItem("userInfo")),
      miPhone: [],
      reMiList: [],
      tvList: [],
      keyword: "",
    };
  },
  mounted() {
    this.getCartNum();
    this.getProduct();
  },
  methods: {
    async getCartNum() {
      if (this.userInfo) {
        let res = await this.axios.get("/carts/products/sum");
        this.$store.commit("changeCartCount", res.data);
      }
    },
    loginOut() {
      window.sessionStorage.clear();
      this.$router.go(0);
    },
    async getProduct(keyword = "") {
      let res = await this.axios.get("/products", {
        params: {
          pageNum: 1,
          pageSize: 40,
          keyword,
        },
      });
      // 从拿到的数据中手动分离出 三种类别的产品
      this.miPhone = res.data.list.slice(4, 10);
      this.reMiList = res.data.list.slice(10, 15);
      this.tvList = res.data.list.splice(20, 1);
    },
    enter() {
      console.log("1");
    },
  },
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.header {
  .top_bar {
    @include flex($hov: "");
    height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background-color: #333333;
    .container {
      @include flex($hov: space-between);
      .menu {
        a {
          display: inline-block;
          margin-right: 17px;
          color: #b0b0b0;
          &:hover {
            color: #fff;
          }
        }
      }
      .user {
        a {
          display: inline-block;
          margin-right: 17px;
          color: #b0b0b0;
          &:hover {
            color: #fff;
          }
        }
        @include flex($hov: "");
        .cart {
          margin-right: 0;
          @include flex();
          width: 110px;
          height: 40px;
          color: #b0b0b0;
          background-color: #424242;
          &:hover {
            color: white;
            background: $colorA;
          }
          .icon_cart {
            display: inline-block;
            margin-right: 4px;
            width: 16px;
            height: 12px;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
          }
        }
      }
    }
  }
  .top_header {
    @include flex();
    position: relative;
    height: 112px;
    .container {
      @include flex($hov: space-between);
      .logo {
        width: 55px;
        height: 55px;
        background-color: $colorA;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          margin-left: 0px;
          transition: all 0.5s;
          &:hover {
            margin-left: -55px;
            transition: 0.5s;
          }
          &::before {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: 55px;
          }
          &::after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: 55px;
          }
        }
      }
      .menu {
        margin-left: 210px;
        @include flex($hov: flex-start);
        flex: 1;
        .item {
          padding: 46px 0;
          span {
            margin-right: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #333333;
            cursor: pointer;
            &:hover {
              color: $colorA;
            }
          }
          &:hover {
            .children {
              height: 220px;
              opacity: 1;
              transition: all 0.5s;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 100%;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            z-index: 20;
            background-color: #fff;
            ul {
              width: 1220px;
              margin: 0 auto;
              display: flex;
              .product {
                position: relative;
                @include flex();
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                &::before {
                  content: "";
                  display: inline-block;
                  position: absolute;
                  top: 40px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child::before {
                  display: none;
                }
                a {
                  display: inline-block;
                  .image {
                    height: 137px;
                    img {
                      margin-top: 26px;
                      width: auto;
                      height: 111px;
                    }
                  }
                  .name {
                    @include flex();
                    margin-top: 19px;
                    margin-bottom: 8px;
                    font-weight: bold;
                    color: $colorB;
                  }
                  .price {
                    @include flex();
                    color: $colorA;
                  }
                }
              }
            }
          }
        }
      }
      .search {
        box-sizing: border-box;
        display: flex;
        width: 320px;
        height: 55px;
        border: 1px solid #e0e0e0;
        .input {
          box-sizing: border-box;
          flex: 1;
          padding: 0 10px;
          font-size: 14px;
          border: none;
        }
        .span {
          box-sizing: border-box;
          width: 60px;
          @include flex();
          padding: 4px 10px;
          border: none;
          border-left: 1px solid #e0e0e0;
          background: url("/imgs/icon-search.png") no-repeat center;
          background-size: 20px;
          &:hover {
            background-color: $colorA;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
