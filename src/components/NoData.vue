<template>
    <div class="no-data">
        暂无数据...
    </div>
</template>
<style lang="scss" scope>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.no-data{
    @include flex();
    width: 100%;
    height: 100%;
    font-size: 26px;
    font-weight: 500;
}
</style>