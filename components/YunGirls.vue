<script lang="ts" setup>
import OriginalYunGirls from 'valaxy-theme-yun/components/YunGirls.vue'

// 自定义数据
interface GirlType {
  name: string
  url: string
  avatar: string
  from?: string
  reason?: string
}

const props = defineProps<{
  girls: GirlType[] | string
  random?: boolean
}>()
</script>

<template>
  <!-- 使用原有的 YunGirls 组件 -->
  <OriginalYunGirls :girls="girls" :random="random"/>
</template>

<style lang="scss">
/* 只修改 &-avatar 部分 */
.girl-avatar {
  /* 你可以在这里自定义 avatar 样式 */
  
  /* 比如调整头像的尺寸 */
  width: 6rem !important;
  height: 6rem !important;

}
</style>