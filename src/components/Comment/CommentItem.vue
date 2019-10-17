<template>
    <div class="comment-item">
        <div class="user-info">
            <img src="../../assets/icon_user.png" class="user-img">
            <span class="user-name">{{commnt.name}}</span>
        </div>
        <div class="pl40">
            <p class="content">{{commnt.content}}</p>
            <div class="comment-time">
                <span class="time">{{commnt.time}}</span>
                <span>·回复</span>
            </div>
            <div class="split-solid-line"/>
        </div>
        <div class="like">
            <span class="like-count">{{commnt.likes|toThousandsFormatter}}</span>
            <i class="icon-like"></i>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    commnt: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped lang="stylus">
.comment-item
    position: relative
    margin: 16px 0
    .user-info
        display: flex
        .user-img
            width: 30px
            height: 30px
            border-radius: 50%
        .user-name
            color: #bfa48a
            margin-left: 10px
            font-size: 16px
    .pl40
        padding-left: 40px
        .content
            line-height: 22px
        .comment-time
            font-size: 13px
            margin: 8px 0
            .time
                color: gray
                font-size: 13px
        .split-solid-line
            margin-top:14px
            border-top: 1px solid #eee
    .like
        position: absolute
        right: 0
        top: 0
        display: flex
        font-size: 14px
        .like-count
            color: gray
            margin-right: 4px
        .icon-like
            width: 13px
            height: 13px
            background-image: url(../../assets/icon_like_small.png)
            background-repeat: no-repeat
            background-position: center
            background-size: cover

</style>