<template>
  <div class="footer">
    <div class="container">
      <service-bar/>
      <div class="main_message">
        <ul v-for="(item, index) in contentList" :key="index">
          <li class="title">{{ item.title }}</li>
          <li class="item" v-for="(item2, index) in item.choseItem" :key="index">
            <span>{{ item2 }}</span>
          </li>
        </ul>
        <div class="contact">
          <p class="phone_number">400-100-5678</p>
          <p class="time">8:00-18:00 (仅收市话费)</p>
          <span class="service">
              <i class="fa fa-commenting" aria-hidden="true"></i>
              人工客服
          </span>
          <span class="attention">
            <p>关注小米：</p>
            <i class="fa fa-weibo " aria-hidden="true"></i> 
            <i class="fa fa-weixin " aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar';
export default {
  props: {
    contentList: {
      type: Array,
      default: () => {
        return [
          {
            title: "帮助中心",
            choseItem: ["账户管理", "购物指南", "订单操作"],
          },
          {
            title: "服务支持",
            choseItem: ["售后政策", "自助服务", "相关下载"],
          },
          {
            title: "线下门店",
            choseItem: ["小米之家", "服务网点", "授权体验店"],
          },
          {
            title: "关于小米",
            choseItem: ["了解小米", "加入小米", "投资者关系","企业社会责任","廉洁举报"],
          },
          {
            title: "关于我们",
            choseItem: ["新浪微博", "官网微信", "联系我们","公益基金会"],
          },
          {
            title: "特色服务",
            choseItem: ["F码通道", "礼物码", "防伪查询"],
          },
        ];
      },
    },
  },
  methods: {},
  components: {
    ServiceBar
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.footer {
  padding: 20px;
  .container {
    .main_message{
      padding-top: 40px;
      display: flex;
      ul {
        display: flex;
        flex-direction: column;
        width: 160px;
        &:last-child {
          border-right: 1px solid #cccccc;
        }
        .title {
          display: inline-block;
          margin: -1px 0 26px;
          font-size: 14px;
          line-height: 1.25;
          color: #424242;
        }
        .item {
          display: inline-block;
          margin: 10px 0 0;
          font-size: 12px;
          span {
            cursor: pointer;
            &:hover {
              color: $colorA;
            }
          }
        }
      }
      .contact {
        @include flex();
        flex-direction: column;
        width: 251px;
        color: #616161;
        border-left: 1px solid #e0e0e0;
        .phone_number {
          margin: 0 0 10px 0;
          font-size: 22px;
          line-height: 1;
          color: $colorA;
        }
        .time {
          margin: 0 0 10px 0;
          font-size: 12px;
        }
        .service {
          @include flex();
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          border: 1px solid $colorA;
          background: #fff;
          color: $colorA;
          text-align: center;
          cursor: pointer;
          transition: .5s;
          &:hover{
            color: #fff;
            border-color: #fff;
            background: $colorA;
            transition: .5s;
            .fa-commenting{
              color: white;
            }
          }
          .fa-commenting{
            margin-right: 5px;
          }
        }
        .attention {
          @include flex();
          font-size: 12px;
          margin-top: 10px;
          position: relative;
          .fa{
            cursor: pointer;
            font-size: 18px;
            margin-left: 5px;;
            &:hover{
              color: $colorA;
            }
          }
        }
      }
    }
  }
}
</style>
