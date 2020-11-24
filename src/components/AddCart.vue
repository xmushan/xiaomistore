<template>
<transition name="cart">
  <div class="add-cart-container" v-if="flag">
    <div class="dialog">
      <div class="title">
        <span class="name">{{ tipValue }}</span>
        <span class="icon-close" @click="toggle"
          ><i class="fa fa-times" aria-hidden="true"></i
        ></span>
      </div>
      <div class="content">
        <p>{{ textValue }}</p>
      </div>
      <div class="btn-container">
        <span class="btn-confirm" @click="goToCart">前往购物车</span>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  props: {
    tipValue: {
      type: String,
      default: "提示",
    },
    textValue: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
        flag: false
    };
  },
  methods: {
      toggle(){
          this.flag = !this.flag
      },
      goToCart(){
          // this.$emit('goToCart')
          this.$router.goNotFound()
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.cart-enter-active, .cart-leave-active {
  top: 0px;
  transition: all .3s;
}
.cart-enter, .cart-leave-to {
  top: -1000px;
  opacity: 0;
}

.add-cart-container {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 99;
  .dialog {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 350px;
    height: 170px;
    background-color: #ffffff;
    .title {
      @include flex(space-between);
      .name {
        font-size: $fontH;
      }
      .icon-close {
        font-size: 26px;
        color: #b0b0b0;
        &:hover {
          color: $colorA;
        }
      }
    }
    .content {
      @include flex();
      font-size: $fontI;
      height: 90px;
    }
    .btn-container {
      @include flex();
      .btn-confirm {
        @include flex();
        width: 120px;
        height: 30px;
        color: $colorA;
        border: 1px solid $colorA;
        background-color: #fff;
        cursor: pointer;
        &:hover {
          color: #fff;
          background-color: $colorA;
        }
      }
    }
  }
  .wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>