<template>
    <div class="line-content">
        <div class="split-block" />
        <div class="line-select">
            <div class="line-select-item active">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div><div class="line-select-item">金炉2K28X</div>
            <div class="line-select-item">金炉2K28X</div>
        </div>
        <div class="line-detail plr16">
            <div class="tower-container split-line">
                <div class="tower">
                    <div class="tower-name active">21号</div>
                    <img class="tower-img" src="../assets/tower.png" alt="">
                </div>
                <div class="tower-line"></div>
                <div class="tower">
                    <div class="tower-name">21号</div>
                    <img class="tower-img" src="../assets/tower.png" alt="">
                </div>
                <div class="tower-line"></div>
                <div class="tower">
                    <div class="tower-name">21号</div>
                    <img class="tower-img" src="../assets/tower.png" alt="">
                </div>
                <div class="tower-line"></div>
                <div class="tower">
                    <div class="tower-name">21号</div>
                    <img class="tower-img" src="../assets/tower.png" alt="">
                </div>
            </div>
            <div class="line-info split-line">
                <h1 class="line-info-title">合肥市110KV永西一二线-13号-小号侧塔线异常</h1>
                <img src="../assets/temp_1.png" class="line-info-img" alt="">
                <img src="../assets/temp_1.png"  class="line-info-img" alt="">
                <p>
                    Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
                    如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
                    如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
                </p>
            </div>
        </div>
        <like-and-share/>
        <comment/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
    @import '../stylus/mixin.styl';

    .line-content
        margin-top: 8px
        background-color: #fcfcfc
        .split-block
            height:6px
            background-color: #f2f3f5
        .line-select
            margin: 10px 0
            display: flex
            align-items: center
            flex-wrap: wrap
            .line-select-item
                margin: 5px 10px
                padding: 8px 10px
                border: 1px solid #eee
                font-size: 14px
                &.active
                    border: 1px solid #f19034
        .line-detail
            .tower-container
                display: flex
                align-items: center
                position:relative
                .tower
                    .tower-name
                        font-size: 12px
                        font-weight:bold
                        line-height:1
                        text-align: center
                        &.active
                            border-bottom: 1px solid #f19034
                    .tower-img
                        margin-top: 8px
                        height:90px
                .tower-line
                    margin: 0 -3px
                    width:74px
                    height: 112px
                    background-image: url(../assets/tower_line.png)
                    background-repeat: no-repeat
                    background-position: 0 44px
                    background-size: contain
            .line-info
                .line-info-title
                    font-weight: bold
                    font-size: 20px
                    line-height: 24px
                    margin-bottom:20px
                .line-info-img
                    width:100%
                    margin-bottom:10px
                p
                    line-height: 24px
</style>