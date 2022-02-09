<template>
  <div class="text-red-500">
    <h3>{{num}}</h3>
    <button @click="addNum" class="w-10 h-6 bg-indigo-500  rounded-lg text-white">add</button>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
  
  setup(props) {
    const num = ref(0)

    function addNum() {
    num.value++
  }

    return {
      num,
      addNum
    }
  }
})

</script>