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
      <div class="container">
        <div class="logo">
          <a href="/#/home"></a>
        </div>
        <div class="menu">
          <div class="item">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="search">
          <input class="input" type="text" placeholder="小米10pro" />
          <input type="button" class="span">
          <!-- <span></span> -->
        </div>
      </div>
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
@import "../assets/scss/base.scss";
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
      .user {
        display: flex;
        align-items: center;
        .cart {
          margin-right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 110px;
          height: 40px;
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
    margin: 20px 0;
    height: 112px;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          width: 110px;
          height: 55px;
          margin-left: 0px;
          transition: 0.5s;
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
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        .item {
          span {
            margin-right: 20px;
            font-size: 16px;
            font-weight: bold;
            color: #333333;
            cursor: pointer;
          }
          &:hover {
            .children {
              display: block;
            }
          }
          .children {
            position: relative;
            display: none;
            ul {
              display: flex;
              li {
                color: red;
              }
            }
          }
        }
      }
      .search {
        display: flex;
        width: 320px;
        border: 1px solid #e0e0e0;
        .input {
          width: 245px;
          height: 55px;
          padding: 0 10px;
          font-size: 14px;
          border: none;
        }
        .span {
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          padding: 4px 10px;
          border:none;
          border-left: 1px solid #e0e0e0;
          background: url('/imgs/icon-search.png') no-repeat center;
          background-size: 20px;
          &:hover{
            background-color: $colorA;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
