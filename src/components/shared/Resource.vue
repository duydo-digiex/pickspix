<template>
  <div id="Resource">
    <slot>
      <Suspense>
        <router-view v-if="true" />
      </Suspense>
    </slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
