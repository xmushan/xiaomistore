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
  methods: {},
  components: {
    navHeader,
    navFooter
  }
}
</script>
<style lang="scss">

</style>
