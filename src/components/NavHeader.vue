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
          <div v-if="!userInfo">
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
          </div>
          <div v-else>
            <a href="javascript:;">{{userInfo.username}}</a>
            <a href="javascript:;" @click="loginOut">退出</a>
          </div>
          <router-link to="/cart" class="cart">
            <span class="icon_cart"></span>
            <p>购物车({{cartCount}})</p>
          </router-link >
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
              <div class="container">
                <ul>
                  <li>
                    <div class="phone">
                      <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5f20a62c3d5b3d6806bd51ab6c5dd12.jpg?w=632&h=340'/>
                      <div class="name">手机</div>
                      <div class="price">1799</div>
                    </div>
                  </li>
                  <li>
                    <div class="phone">
                      <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5f20a62c3d5b3d6806bd51ab6c5dd12.jpg?w=632&h=340'/>
                      <div class="name">手机</div>
                      <div class="price">1799</div>
                    </div>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="search">
          <input class="input" type="text" placeholder="这是一个假的搜索框" />
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
    return {
      userInfo: JSON.parse(window.sessionStorage.getItem('userInfo'))
    };
  },
  mounted(){
    this.getCartNum()
  },
  methods:{
    async getCartNum() {
      if (this.userInfo){
        let res = await this.axios.get('/carts/products/sum');
        this.$store.commit('changeCartCount',res.data)
      }
    },
    loginOut(){
      window.sessionStorage.clear();
      this.$router.go(0);
    }
  },
  computed: {
    cartCount(){
      return this.$store.state.cartCount
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
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
    @include flex($hov:'');
    height: 40px;
    font-size: 12px;
    color: #B0B0B0;
    background-color: #333333;
    .container {
      @include flex($hov:space-between);
      .user {
        @include flex($hov:'');
        .cart {
          margin-right: 0;
          @include flex();
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
    @include flex();
    height: 112px;
    .container {
      @include flex($hov:space-between);
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
        @include flex($hov:flex-start);
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
            position: absolute;
            top: 150px;
            width: 100%;
            height: 220px;
            border: 1px solid red;
            left: 0;
            // display: none;
            ul {
              display: flex;
              li {
                margin: 0 10px;
                
                .phone{
                  @include flex();
                  flex-direction: column;
                  img {
                    width: 300px;
                    height: 170px;
                  }
                  .name{
                    font-size: 25px;
                  }
                  .price{
                    color: $colorA;
                  }
                }
              }
            }
          }
        }
      }
      .search {
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
