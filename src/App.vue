<script setup lang="ts">
import 'dayjs/locale/ko';
import ko_KR from '@/assets/langs/ko_KR';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const layout = computed(() => (route.meta.layout || 'blank') + '-layout');
</script>

<template>
  <a-config-provider :locale="ko_KR" :autoInsertSpaceInButton="false">
    <!-- <HelloWorld/> -->
    <component :is="layout">
      <router-view />
    </component>
  </a-config-provider>
</template>

<style scoped></style>
