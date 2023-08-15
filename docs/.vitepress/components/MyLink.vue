<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">{{ href }}</a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
