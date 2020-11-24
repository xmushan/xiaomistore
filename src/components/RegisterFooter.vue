<template>
  <div class="footer">
    <div class="item">
      <a
        v-for="(item, index) in registerFooterMsg"
        :key="index"
        href="javascript:;"
        >{{ item }}</a
      >|
    </div>
    <div class="dec">
      小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
    </div>
  </div>
</template>
<script>
import { registerFooterMsg } from "../AnalogData";
export default {
  data() {
    return {
      registerFooterMsg
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.footer {
  margin-top: 180px;
  margin-bottom: 35px;
  text-align: center;
  color: $colorE;
  .item {
    a {
      margin: 0;
      color: $colorE;
      font-size: 14px;
      margin: 0 10px;
      vertical-align: middle;
      &:hover {
        color: $colorI;
      }
    }
  }
  .dec {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>