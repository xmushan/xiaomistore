<template>
  <div>
    <input type="text" placeholder="用户名" v-model="userInfo.username" />
    <input type="text" placeholder="密码" v-model="userInfo.password" />
    <input type="button" value="登录" @click="login" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      let { username, password } = this.userInfo;
      if (username.trim() == "" && password.trim() == "") {
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