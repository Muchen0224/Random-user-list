<template>
  <div class="flex justify-end gap-x-1 text-2xl">
    <button class="flex-initial" @click="changeMode('card')" :class="{active : mode === 'card'}">
      <font-awesome-icon :icon="['fas', 'id-card']"/>
    </button>
    <button class="flex-initial" @click="changeMode('list')" :class="{active : mode === 'list'}">
      <font-awesome-icon :icon="['fas', 'list']"/>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ModeControl',
  props: {
    mode: {
      type: String,
      required: true
    }
  },

  setup (props, { emit }) {
    const changeMode = (mode:string) => {
      emit('changeMode', mode)
    }
    return {
      changeMode
    }
  }
})
</script>

<style scoped>
  .active {
    color: #c084fc;
  }
</style>
