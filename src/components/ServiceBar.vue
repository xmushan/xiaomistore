<template>
    <div class="service_bar">
        <div class="container">
            <ul>
                <li v-for="(item,index) in contentList" :key="index">
                    <img :src="item.image" alt="">
                    <p>{{item.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        contentList: {
            type: Array,
            default: () => {
                return [
                    {
                        text: '预约维修服务',
                        image: '/imgs/icon-setting.png'
                    },
                                        {
                        text: '7天无理由退换货',
                        image: '/imgs/icon-7day.png'
                    },
                                        {
                        text: '15天免费换货',
                        image: '/imgs/icon-15day.png'
                    },
                                        {
                        text: '满99元包邮',
                        image: '/imgs/icon-post.png'
                    },
                                        {
                        text: '520余家售后网点',
                        image: '/imgs/icon-loc.png'
                    }
                ]
            }
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.service_bar{
    .container{
        ul{
            display: flex;
            padding: 27px 0;
            border-bottom: 1px solid #e0e0e0;
            li{
                @include flex();
                width: 19.5%;
                height: 25px;
                border-left: 1px solid #e0e0e0;
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                &:first-child{
                    border: none;
                }
                img{
                    width: 24px;
                    height: auto;
                }
                p{
                    margin-left: 10px;
                    color: #616161;
                }
            }
        }
    }
}
</style>