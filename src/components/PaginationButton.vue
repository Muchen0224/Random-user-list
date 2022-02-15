<template>
  <button class="w-10 h-10 bg-white font-semibold border-2 border-purple-400 hover:border-none hover:bg-purple-400 hover:text-white mx-2 rounded-md flex justify-center items-center">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'PaginationButton'
})
</script>
