<template>
  <div class="login-footer">
    <div class="wrapper">
      <div class="container">
        <div class="logo">
          <router-link to="/home">
            <img src="/imgs/mi-logo.png" />
          </router-link>
        </div>
        <div class="title">注册小米账号</div>
        <div class="input">
          <span>请输入账户名：</span>
          <input
            type="text"
            placeholder="请输入账户名"
            v-model.trim="userInfo.username"
          />
          <span class="tip">成功注册账号后，无法修改密码</span>
          <span>请输入密码：</span>
          <input
            type="text"
            placeholder="请输入密码"
            v-model.trim="userInfo.password"
          />
          <span>请输入邮箱：</span>
          <input
            type="text"
            placeholder="请输入邮箱"
            v-model.trim="userInfo.email"
          />
        </div>
        <input :class=" [flag ? 'btn' : 'disabled','btn']" type="button" value="立即注册" @click="register" :disabled="!flag" />
        <div class="dec">
          <input type="checkbox" v-model="flag" /> 已阅读并同意：小米
          <strong>用户协议</strong>和 <strong>隐私政策</strong>
        </div>
      </div>
      <register-footer class="footer"></register-footer>
    </div>
  </div>
</template>
<script>
import registerFooter from "../../components/RegisterFooter";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
        email: "",
      },
      flag: false,
    };
  },
  components: {
    registerFooter,
  },
  methods: {
    async register() {
      let {username,password,email} = this.userInfo
      if (username == '' || password == '' || email == ''){
        this.$message.error('信息不可为空');
        return
      }
      let res = await this.axios.post('/user/register',{...this.userInfo})
      if (!res.status){
        this.$message({
          message: `注册成功`,
          type: 'success'
        })
      } else {
        this.$message({
          message: res.msg,
          type: 'warning'
        })
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/config.scss";
@import "../../assets/scss/base.scss";
@import "../../assets/scss/mixin.scss";
.login-footer {
  .wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #f5f5f5;
    padding-top: 50px;
    overflow-y: auto;
  }
  .container {
    width: 850px;
    height: 550px;
    background-color: #ffffff;
    text-align: center;
    .logo {
      display: inline-block;
      width: 50px;
      height: 50px;
      background-color: $colorA;
    }
    .title {
      margin-top: 46px;
      color: #333333;
      font-size: 30px;
      letter-spacing: 5px;
    }
    .input {
      margin: 0 auto;
      margin-top: 42px;
      width: 332px;
      text-align: left;
      .tip {
        font-size: 14px;
        color: #999999;
      }
      span {
        display: block;
        font-size: 14px;
        color: #333333;
        margin: 5px 0;
      }
      input {
        width: 100%;
        height: 42px;
        text-indent: 5px;
        font-size: 14px;
        border: 1px solid #e5e5e5;
      }
    }
    .btn {
      @include flex();
      margin: 15px auto;
      width: 332px;
      height: 42px;
      color: #f5f5f5;
      background-color: $colorA;
      font-size: 14px;
      border: none;
      cursor: pointer;
    }
    .disabled{
      background-color: #e5e5e5;
    }
    .dec {
      margin-top: 25px;
      font-size: 14px;
      color: #999999;
      strong {
        color: black;
        cursor: pointer;
      }
    }
  }
  .footer {
    margin-bottom: 0;
    margin-top: 80px;
  }
}
</style>