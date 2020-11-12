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
      let res = await this.axios.post("/login/user", { ...this.userInfo });
      console.log(res);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>