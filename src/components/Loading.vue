<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <font-awesome-icon :icon="['fas', 'spinner']" class="mr-2 animate-spin text-4xl" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LoadingComponent'
})
</script>
