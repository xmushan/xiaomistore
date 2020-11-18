<template>
  <div>
    <nav-header />
    产品详细页面
    <nav-footer />
  </div>
</template>
<script>
import navHeader from '../components/NavHeader'
import navFooter from '../components/NavFooter'
export default {
  data() {
    return {};
  },
  mounted() {
    this.getProductDetail();
  },
  methods: {
   async getProductDetail() {
      console.log(this.$route.params);
      let {productId} = this.$route.params
      let res = await this.axios.get(`/products/${productId}`)
      console.log(res,'34')
    },
  },
  components: {
    navHeader,
    navFooter
  }
};
</script>

<style lang="scss">
</style>