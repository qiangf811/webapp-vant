<template>
    <div class="comment-input-wrapper">
        <input type="text">
        <i class="icon icon-word"></i>
        <i class="icon icon-star"></i>
        <i class="icon icon-share"></i>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="stylus">
.comment-input-wrapper
    padding: 0 20px
    height: 50px
    border-top: 1px solid #eee
    background-color: #fff
    display: flex
    align-items: center
    justify-content: space-between
    input
        -web-kit-appearance:none
        -moz-appearance: none
        background: #f1f2f4
        height: 30px
        width: 60%
        border-radius: 3px
        outline:0
        border: none
        font-size: 14px
    .icon
        width: 17px
        height: 17px
        background-repeat: no-repeat
        background-position: center
        background-size: contain
        &.icon-word
            width: 18px
            height: 17px
            background-image: url(../../assets/icon_word.png)
        &.icon-star
            width: 20px
            height: 19px
            background-image: url(../../assets/icon_star.png)
        &.icon-share
            width: 17x
            height: 17px
            background-image: url(../../assets/icon_share_small.png)
           
</style>
