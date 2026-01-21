<template>
  <div class="gradient-icon">
    <component :is="icon" class="icon-shape" />
  </div>
</template>

<script setup lang="ts">
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const props = defineProps<{
  icon: object | string;
  size?: string;
}>();
</script>

<style scoped>
  .gradient-icon {
    display: inline-flex;
    background: var(--gradient-icons);
    padding: var(--space-sm);
    border-radius: var(--radius-sm);
  }

  .icon-shape {
    width: var(--icon-size-base);
    height: var(--icon-size-base);
    color: var(--border-base);
  }
</style>
