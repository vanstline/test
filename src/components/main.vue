<template >
  <div class="">
    
  </div>
</template>

<script>
  import { getAxios } from '@/api/index'
  import { Swiper, Panel } from 'vux';
  import {mapMutations } from 'vuex'
  // 处理日期的函数
  var nowDate = new Date();
  var y,m,d= '';
  let num = 0;
  var dis = 60*60*24*1000;

  // 返回两个值 一个年月日格式作为参数发送请求 一个作为新闻页首
  function getDate(nowDate) {
    var datsArr = ['天','一','二','三','四','五','六'];
    nowDate = new Date(nowDate);
    var days = nowDate.getDay();
    y = addZreo(nowDate.getFullYear());
    m = addZreo((nowDate.getMonth() + 1));
    d = addZreo(nowDate.getDate());
    var dateFormat = `${m}月${d}日 星期${datsArr[days]}`;
    return [y+m+d,dateFormat];
  }
  // 补零
  function addZreo(n) {
    return n = n < 10 ? '0'+n : '' + n
  }


  let isTrue = true;
  let isFalse = false;
  let initLoaded = false; // 是否初始化加载完成
  let moreLoaded = true;
  export default {
    name: 'main',
    components: {
      Swiper,
      Panel
    },

  }

</script>

<style lang="less">

  #app {
    .scroller {
      margin-top: 0.94rem;
      width: 100%;
      .pull-to-refresh-layer {
        height: 0;
        margin-top: 0;
        z-index: 100;
        background: red;

      }
      .main {
        .swiper {
          .vux-swiper-desc {
            padding: 30px 20px;
            height: auto;
            line-height: .5rem;
            overflow: visible;
            white-space: normal;
          }
          .vux-indicator, .vux-slider .vux-indicator-right {
            line-height: .8rem;
          }
        }
        .weui-panel {
          margin: 0;
          .weui-media-box_appmsg .weui-media-box__hd {
            width: 1.6rem;
            margin-right: .3rem;
          }
          .weui-media-box__title {
            white-space: normal;
            font-size: 14px;
          }
        }
        .date {
          height: .92rem;
          font-size: 18px;
          line-height: .92rem;
          text-align: center;
          font-weight: 400;
          color: #fff;
          background-color:rgba(0, 156, 255, .5);
        }
      }
    }
  }
</style>
