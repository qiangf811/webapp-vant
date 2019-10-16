<template>
    <div class="like-share plr16">
        <div class="button">
            <i class="icon-like"></i><span>57.4w</span>
        </div>
        <div class="button">
            <i class="icon-share"></i><span>分享</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'like-and-share'
}
</script>
<style scoped lang="stylus">
    .like-share
        display: flex
        justify-content: space-between
        margin: 20px 0
        .button
            width: calc((100% - 28px)/2)
            height: 42px
            text-align: center
            background-color: #f1f2f4
            line-height: 42px
            border-radius: 6px
            font-size: 12px
            .icon-like
                width: 18px
                display: inline-block
                height: 18px
                background-image: url(../assets/icon_like_big.png)
                background-repeat: no-repeat
                background-position: center
                background-size: contain
                vertical-align: sub
            .icon-share
                width: 16px
                display: inline-block
                height: 16px
                background-image: url(../assets/icon_share_big.png)
                background-repeat: no-repeat
                background-position: center
                background-size: contain
                vertical-align: sub
            span
                display: inline-block
                margin-left: 5px
</style>