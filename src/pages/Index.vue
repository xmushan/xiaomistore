<template>
    <div>zhuye</div>
</template>
<script>
import axios from 'axios'
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
    
  }
}
</script>
<style lang="scss">

</style>




