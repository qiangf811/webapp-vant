<template>
    <div class="comment-wrapper">
        <h1 class="title">观点</h1>
        <div class="comment-list">
           <comment-item v-for="(item,index) in comments" :key="index" :commnt="item"/>
        </div>
        <comment-input class="input"/>
    </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang="stylus">
    .comment-wrapper
        .title
            font-size: 20px
            position:relative
            padding-left: 10px
            height: 40px
            &::before
                content:''
                position:absolute
                width:5px
                height:15px 
                left:0
                top:2px
                background: #e32316
            &::after
                content:''
                position:absolute
                width:100%
                left:0
                bottom:0
                border-top: 1px solid #eee
        .comment-list
            margin-top: 15px
        .input
            margin: 0 -14px
</style>