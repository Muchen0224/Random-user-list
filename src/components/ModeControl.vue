<template>
  <div class="flex justify-end gap-x-1 text-2xl">
    <button class="flex-initial">
      <font-awesome-icon :icon="['fas', 'id-card']"/>
    </button>
    <button class="flex-initial">
      <font-awesome-icon :icon="['fas', 'list']"/>
    </button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'ModeControl'
})
</script>