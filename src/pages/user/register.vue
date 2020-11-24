<template>
  <div class="register-container">
    <div class="container">
      <div class="login-form">
        <img class="logo" src="/imgs/mi-logo.png" alt="" />
        <div class="form">
          <div class="title">注册小米账号</div>
          <div class="content">
            <input type="text" v-model="userInfo.username" />
            <input type="text" v-model="userInfo.password" />
            <input type="text" v-model="userInfo.email" />
            <span class="btn">立即注册</span>
          </div>
        </div>
        <div class="msg">
          <input type="checkbox" />已阅读并同意：小米 用户协议和 隐私政策
        </div>
      </div>
    </div>
    <nav-footer/>
  </div>
</template>
<script>
import NavFooter from '../../components/NavFooter.vue';
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    async register() {
      let res = await this.axios.post("/user/register", { ...this.userInfo });
    },
  },
  components: {
    NavFooter,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/config.scss";
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
.register-container {
  .container {
    @include flex();
    margin-top: 177px;
    border: 1px solid red;
    .login-form {
      @include flex();
      flex-direction: column;
      .logo {
        background-color: $colorA;
      }
      .form {
        @include flex();
        flex-direction: column;
        .title {
          width: 182px;
          height: 29px;
          font-size: 30px;
          font-weight: bold;
          color: #333333;
        }
        .content {
          @include flex();
          flex-direction: column;
        }
      }
    }
  }
}
</style>