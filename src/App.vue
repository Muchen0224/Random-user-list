<template>
  <suspense>
    <RandomUser/>
  </suspense>
</template>

<script>
import {defineComponent} from 'vue'
import RandomUser from './components/RandomUser.vue'

export default defineComponent({
  components:{
    RandomUser
  }
})
</script>

