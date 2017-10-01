<template>
  <div id="app">
    <view-box>
      <x-header
        class="header"
        :right-options="{showMore: true}"
        @on-click-more="showMenus = true"
        >
        <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        <div>今日热闻</div>
      </x-header>

      <scroller
        class="scroller"
        :on-refresh="refresh"
        :on-infinite="infinite"
         ref="myscroller"
        >
        <!-- <router-view></router-view> -->
      </scroller>


    </view-box>
  </div>
</template>

<script>
  import { ViewBox, XHeader } from 'vux'
  import { getAxios } from './api/index'

  let firstLoad = false;
  let moreLoaded = true;

  export default {
    name: 'app',
    components: {
      ViewBox,
      XHeader
    },
    mounted() {
      firstLoad = true;
    },
    computed: {

    },
    methods: {
      refresh() {
        console.log(2);
      },
      infinite() {
        if(!firstLoad) {
          console.log(1);
          this.$refs.myscroller.finishInfinite();
          return
        }
        if (!moreLoaded) {
            return;
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @w: 100rem;
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  #app {
    height: 100%;
    position: relative;
    .header {
      position: f;
      top: 0;
      left: 0;
      z-index: 9;
      width: 100%;
      background-color:rgba(0, 156, 255, .5);
    }
    .scroller {
      top: .92rem;
      background: red;
    }

  }
</style>
