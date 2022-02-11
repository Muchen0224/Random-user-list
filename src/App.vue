<template>
  <div class="w-full min-h-screen px-8 py-6 bg-purple-50">
    <ModeControl/>
    <!-- <CardModeUsers :users='data.users'/> -->
    <ListModeUsers :users='data.users'/>
  </div>
</template>

<script>
import {defineComponent, defineAsyncComponent, reactive, onBeforeMount} from 'vue'
import ModeControl from './components/ModeControl.vue'
import {getRandomUserByPage} from './api/randomUser'


export default defineComponent({
  components:{
    ModeControl,
    CardModeUsers:defineAsyncComponent(() => import('./components/CardModeUsers.vue')),
    ListModeUsers:defineAsyncComponent(() => import('./components/ListModeUsers.vue'))
  },
  
  setup() {
    const data = reactive({users:[]});
    onBeforeMount(async() => {
      const res = await getRandomUserByPage(1)
      data.users.value = res.data.results
    })

    return {
      data
    }
  }
})
</script>

