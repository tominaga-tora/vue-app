<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute, onBeforeRouteUpdate } from 'vue-router'
  const route = useRoute()
  const userId = ref(route.params.id)

  onBeforeRouteUpdate(async (to, from) => {
    if (to.params.id !== from.params.id) {
      userId.value = to.params.id
    }
  })
</script>

<template>
  <div class="card">
    <p>User: {{ userId }}</p>
  </div>
</template>

<style scoped>
</style>
