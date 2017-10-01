<template>
  <div class="more">


  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  import { getMore } from '@/api/index'
  import {mapState } from 'vuex'
  export default {


  }
</script>

<style lang="less">
  .more {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: #fff;
    .contents {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 85% !important;
      padding-bottom: 1rem;
      // 以上两条 用来解决滚动底部给不了高度的问题
      font-size: 18px;
      .headerInfo {
        position: relative;
        width: 100%;
        height: 4.4rem;
        img {
          width: 100%;
          height: 100%;
        }
        h2 {
          position: absolute;
          left: 0;
          right: 0;
          padding: 0.3rem .4rem .5rem;
          bottom: 0;
          font-size: 20px;
          line-height: 25px;
          font-weight: normal;
          color: #fff;
          background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1)100%);
          background-image: linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1)100%);
          span {
            position: absolute;
            right: .4rem;
            bottom: 0rem;
            color: #ccc;
            font-size: 12px;
            line-height: 40px;

          }
        }
      }
      .textInfo {
        position: relative;
        margin: .4rem;
        .question-title {
          font-size: 18px;
          line-height: 26px;
        }
        img {
          width: 100%;
        }
        .answer>div{
          margin-top: .4rem;
        }
        .answer {
          .meta {
            position: relative;
            font-size: 16px;
            height: .6rem;
            line-height: 30px;
            padding-left: .8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .avatar {
              position: absolute;
              top: 0;
              left: 0;
              width: .6rem;
              height: .6rem;
            }
            .author {
              font-weight: 700;
            }
            .bio {
              color: #979797;
            }
          }
          .content>p {
            margin-top: .4rem;
          }
          .content {
            p:first-child {
              margin: 0;
            }
          }
        }
      }
    }
    .weui-tabbar {
      position: absolute;
    }
  }
</style>
