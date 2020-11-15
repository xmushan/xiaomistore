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
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="cart">
            <span class="icon_cart"></span>
            <p>购物车</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 商品菜单 -->
    <div class="top_header">
      <div class="container">caidan</div>
    </div>
  </div>
</template>
<script>
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
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
a {
  display: inline-block;
  margin-right: 17px;
  color: #B0B0B0;
  &:hover {
    color: #fff;
  }
}
.header {
  .top_bar {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 12px;
    color: #B0B0B0;
    background-color: #333333;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      width: 1226px;
      .user {
        display: flex;
        align-items: center;
        .cart {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 110px;
          height: 40px;
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
}
</style>
