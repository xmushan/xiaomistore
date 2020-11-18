<template>
  <div>
    zhuye
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      let res = await this.axios.post('/user/login',{...this.userInfo});
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
