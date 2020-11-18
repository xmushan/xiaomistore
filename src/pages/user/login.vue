<template>
  <div>
    <input type="text" placeholder="用户名" v-model.trim="userInfo.username" />
    <input type="text" placeholder="密码" v-model.trim="userInfo.password" />
    <input type="button" value="登录" @click="login" />
    <router-link to="/register">注册</router-link>
  </div>
</template>
<script>
import registerVue from './register.vue';
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
      checkbox: false,
      checkName: [],
      pick: ''
    };
  },
  methods: {
    async login() {
      let { username, password } = this.userInfo;
      if (username == "" && password == "") {
        this.$message("请输入用户名或密码");
        return;
      }
      let res = await this.axios.post("/user/login", { ...this.userInfo });
      if (res.status == 1) {
          this.$message.error(res.msg);
      } else {
        window.sessionStorage.setItem('userInfo', JSON.stringify(res.data))
        this.$message({
            message: res.msg,
            type: "success",
        });
        this.getCartNum();
        this.$router.push('/home');
      } 
    },
    async getCartNum() {
        let res = await this.axios.get('/carts/products/sum');
        this.$store.commit('changeCartCount',res.data)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>