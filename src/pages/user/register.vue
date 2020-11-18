<template>
    <div>
        注册界面
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        async register() {
            let res = await this.axios.post('/user/register',{...this.userInfo})
        },
    }
}
</script>
<style lang="scss" scoped>
</style>