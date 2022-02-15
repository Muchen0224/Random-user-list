<template>
  <suspense>
    <template #default>
      <RandomUser/>
    </template>
    <template #fallback>
      <Loading/>
    </template>
  </suspense>
</template>

<script>
import {defineComponent} from 'vue'
import RandomUser from './components/RandomUser.vue'
import Loading from './components/Loading.vue'

export default defineComponent({
  components:{
    RandomUser,
    Loading
  }
})
</script>

