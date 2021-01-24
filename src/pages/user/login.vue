<template>
  <div class="loginPage">
    <div class="container">
      <div class="header">
        <div class="logo">
          <a href="/home"></a>
        </div>
        <div class="name">
          <div class="title">小米商城</div>
          <div class="desc">让每个人都能享受科技的乐趣</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="container flex">
        <div class="loginForm">
          <div class="methods">
            <div
              :class="['methodsText', currentIndex == 1 ? 'active' : '']"
              @click="currentIndex = 1"
            >
              账号登录
            </div>
            <div class="split"></div>
            <div
              :class="['methodsText', currentIndex == 2 ? 'active' : '']"
              @click="currentIndex = 2"
            >
              扫码登录
            </div>
          </div>
          <div class="inputContainer">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model.trim="userInfo.username"/>
            <input type="password" placeholder="密码" v-model.trim="userInfo.password"/>
          </div>
          <div class="loginBtn" @click="login" >
            <span v-if="!loading">登录</span>
            <i v-else class="fa fa-spinner fa-spin fa-2x fa-fw"></i>
          </div>
          <div class="descContainer">
            <a class="register" href="/register">手机短信登录/注册</a>
            <div class="forget">
              <span @click="$router.push('/register')">立即注册</span>
              <div class="split"></div>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer class="container" />
  </div>
</template>
<script>
import NavFooter from "../../components/NavFooter";
export default {
  components: {
    NavFooter,
  },
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      currentIndex: 1,
      loading: false
    };
  },
  methods: {
    async login() {
      let { username, password } = this.userInfo;
      if (username == "" && password == "") {
        this.$message("请输入用户名或密码");
        return;
      }
      if (this.loading) {return}
      this.loading = true
      let res = await this.axios.post("/user/login", { ...this.userInfo });
      this.loading = false
      if (res.status == 1) {
        this.$message.error(res.msg);
      } else {
        window.sessionStorage.setItem("userInfo", JSON.stringify(res.data));
        this.$message({
          message: res.msg,
          type: "success",
        });
        this.getCartNum();
        this.$router.push("/home");
      }
    },
    async getCartNum() {
      let res = await this.axios.get("/carts/products/sum");
      this.$store.commit("changeCartCount", res.data);
    },
    changeMode(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/config.scss";
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";

.header {
  @include flex("", center);
  padding: 10px 0;
  .logo {
    margin-right: 18px;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: $colorA;
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
  .name {
    .title {
      font-size: 33px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
    }
    .desc {
      font-size: 10px;
      color: #666666;
    }
  }
}
.main {
  height: 556px;
  background: url("../../../public/imgs/login-bg.jpg") no-repeat center;
  background-size: auto 556px;
  background-position-x: 65%;
  .flex {
    height: 556px;
    @include flex(flex-end, center);
    .loginForm {
      width: 410px;
      height: 510px;
      background-color: white;
    }
  }
}
.loginForm {
  box-sizing: border-box;
  padding: 40px 41px;
  .methods {
    margin-bottom: 50px;
    padding: 0 40px;
    @include flex(space-between, center);
    .split {
      display: inline-block;
      width: 2px;
      height: 25px;
      background-color: #d7d7d7;
    }
    .methodsText {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #666666;
    }
    .active {
      color: $colorA;
    }
  }
  input {
    box-sizing: border-box;
    display: block;
    margin: 30px 0;
    padding: 18px;
    width: 348px;
    height: 50px;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #999999;
  }
  .loginBtn {
    margin-top: 30px;
    @include flex();
    width: 100%;
    height: 50px;
    background-color: $colorA;
    color: white;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    cursor: pointer;
  }
}
.descContainer {
  margin-top: 14px;
  @include flex(space-between, center);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  .register {
    color: $colorA;
    cursor: pointer;
  }
  .forget {
    @include flex(space-between,center);
    color: #999999;
    span {
      cursor: pointer;
    }
    .split {
      margin: 0 14px;
      width: 1px;
      height: 14px;
      background-color: #D7D7D7;
    }
  }
}
</style>