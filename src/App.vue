<template>
  <div class="w-full min-h-screen px-8 py-6 bg-purple-50">
    <ModeControl/>
    <CardModeUser :users='users'/>
  </div>
</template>

<script>
import {defineComponent, defineAsyncComponent, reactive, onMounted} from 'vue'
import ModeControl from './components/ModeControl.vue'
import {getRandomUserByPage} from './api/randomUser'


export default defineComponent({
  components:{
    ModeControl,
    CardModeUser:defineAsyncComponent(() => import('./components/CardModeUsers.vue'))
  },
  
  setup() {
    const users = reactive([]);
    onMounted(async() => {
      const res = await getRandomUserByPage(1)
      users.value = res.data.results
    })
    console.log(users)
    return {
      users,
    }
  }
})
</script>

