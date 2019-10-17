<template>
    <div class="line-content">
        <div class="split-block" />
        <div class="line-select">
            <div
                v-for="(item,index) in substationList"
                :key="item.id"
                class="line-select-item"
                :class="{active: currentSubstationIndex===index}"
                @click="hanlderSubstationClick(index)">
                {{item.name}}
            </div>
        </div>
        <div class="line-detail plr16">
            <div class="wrapper">
                <div class="tower-container split-line">
                    <div
                        v-for="(item,index) in lineList"
                        :key="item.id"
                        @click="hanlderLineClick(index)"
                        style="display: flex">
                        <div class="tower">
                            <div class="tower-name" :class="{active: currentLineIndex===index}">{{item.name}}</div>
                            <div class="tower-img"/>
                        </div>
                        <div v-if="index+1!==lineList.length" class="tower-line"></div>
                    </div>
                </div>
            </div>
            <div class="line-info split-line">
                <h1 class="line-info-title">{{lineInfo.title}}</h1>
                <img v-for="(item,index) in lineInfo.pics" :key="index" src="../assets/temp_1.png" class="line-info-img" alt="">
                <p>{{lineInfo.content}}}</p>
            </div>
            <like-and-share :likes="lineInfo.likes" :shareId="lineInfo.id"/>
            <comment :comments="lineInfo.comments"/>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import { fetchStationList, fetchLineList } from 'api/substation'
    export default {
      data: () => ({
        substationList: [],
        currentSubstationIndex: 0,
        lineList: [],
        currentLineIndex: 0
      }),
      async created () {
        try {
          const { data: stationList } = await fetchStationList()
          if (Array.isArray(stationList) && stationList[0]) {
            const { data: lineList } = await fetchLineList({
              id: stationList[0].id
            })
            this.substationList = stationList || []
            this.lineList = lineList || []
            this.$nextTick(() => {
              let wrapper = document.querySelector('.wrapper')
              let scroll = new BScroll(wrapper)
            })
          }
        } catch (error) {
          console.error(error)
          window.alert(error)
        }
      },
      computed: {
        lineInfo () {
          if (this.lineList[this.currentLineIndex]) {
            return { ...this.lineList[this.currentLineIndex].info, id: this.lineList[this.currentLineIndex].id }
          }
          return { pics: [], comments: [], likes: 0 }
        }
      },
      methods: {
        async hanlderSubstationClick (index) {
          this.currentSubstationIndex = index
          try {
            const { data } = await fetchLineList({
              id: this.substationList[index].id
            })
            this.lineList = data
          } catch (error) {
            console.error(error)
            window.alert(error)
          }
        },
        hanlderLineClick (index) {
          this.currentLineIndex = index
          // TODO  点击线路之后的逻辑处理
        }
      }
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
                        border-bottom: 1px solid #fcfcfc
                        &.active
                            border-bottom: 1px solid #f19034
                    .tower-img
                        margin-top: 8px
                        width:37px
                        height:90px
                        background-image: url(../assets/tower.png)
                        background-repeat: no-repeat
                        background-position: center
                        background-size: contain
                .tower-line
                    margin: 0 -5px
                    width:74px
                    height: 112px
                    background-image: url(../assets/tower_line.png)
                    background-repeat: no-repeat
                    background-position: 0 43px
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