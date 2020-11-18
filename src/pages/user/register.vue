<template>
    <div>
        注册界面

        <div :class="{active: isActive}" @click=" isActive= !isActive">动态绑定</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo: {
                username: '',
                password: '',
                email: ''
            },
            isActive: true
        }
    },
    methods: {
        async register() {
            let res = await this.axios.post('/user/register',{...this.userInfo})
        },
        handleClick(){
            this.isActive = !this.isActive
        }
    }
}
</script>
<style lang="scss" scoped>
.active{
    color: red;
}
</style>