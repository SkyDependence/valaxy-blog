<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <a href="https://icp.gov.moe/?keyword=20249936" target="_blank">萌ICP备20249936号</a>
    <div>本站总访问量 <span id="busuanzi_value_site_pv" /> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" /> 人次</div>
    <VCLiveTime start-time="2023-12-17">
      <template #live-time-before>
        <span>本站已运行</span>
      </template>
      <template #live-time-after>
        <span></span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>