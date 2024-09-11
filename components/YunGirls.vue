<script lang="ts" setup>
import OriginalYunGirls from 'valaxy-theme-yun/components/YunGirls.vue'

// 自定义数据
const girlsData = [
  {
    name: 'Sakura',
    url: 'https://example.com/sakura',
    avatar: 'https://example.com/sakura-avatar.png',
    from: 'Anime',
    reason: 'Beautiful character'
  },
  {
    name: 'Miku',
    url: 'https://example.com/miku',
    avatar: 'https://example.com/miku-avatar.png',
    from: 'Vocaloid',
    reason: 'Popular singer'
  }
]
</script>

<template>
  <!-- 使用原有的 YunGirls 组件 -->
  <OriginalYunGirls :girls="girlsData" :random="true"/>
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