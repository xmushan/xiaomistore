<template>
    <div>
      <nav-header/>
        <router-view/>
      <nav-footer/>
    </div>
</template>
<script>
import navFooter from '../components/NavFooter'
import navHeader from '../components/NavHeader'
export default {
  data () {
    return {}
  },
  mounted () {
    this.getMessage()
  },
  methods: {
    async getMessage () {
      const res = await this.axios.get('/products')
      console.info(res)
    }
  },
  components: {
    navHeader,
    navFooter
  }
}
</script>
<style lang="scss">

</style>
