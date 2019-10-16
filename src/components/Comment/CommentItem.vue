<template>
    <div class="comment-item">
        <div class="user-info">
            <img src="../../assets/icon_user.png" class="user-img">
            <span class="user-name">张勇</span>
        </div>
        <div class="pl40">
            <p class="content">评论不分先后，共通谋求发展，伟大的中国共产党万岁，实现伟大复兴而奋斗！</p>
            <div class="comment-time">
                <span class="time">10-10</span>
                <span>·回复</span>
            </div>
            <div class="split-solid-line"/>
        </div>
        <div class="like">
            <span class="like-count">2.7万</span>
            <i class="icon-like"></i>
        </div>
    </div>
</template>

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