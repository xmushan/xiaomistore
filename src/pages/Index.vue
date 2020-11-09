<template>
    <div>
      <navHeader/>
      <router-view/>
      <navFooter/>
    </div>
</template>
<script>
import axios from 'axios'
import navHeader from '../components/NavFooter'
import navFooter from '../components/NavHeader'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    this.getMessage()
  },
  methods: {
    async getMessage () {
      const res = await axios.get('/api/search/hotwords')
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
