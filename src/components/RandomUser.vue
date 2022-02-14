<template>
  <div class="w-full min-h-screen px-8 py-6 bg-purple-50">
    <ModeControl :mode='randomUsers.mode' @changeMode='changeMode' />
    <CardModeUsers :randomUsers='randomUsers' v-if="randomUsers.mode === 'card'"/>
    <ListModeUsers :randomUsers='randomUsers' v-else/>
    <Pagination :randomUsers='randomUsers' @changePage='changePage'/>
  </div>
</template>
<script lang='ts'>
import {defineComponent, defineAsyncComponent, reactive} from 'vue'
import ModeControl from './ModeControl.vue'
import Pagination from './Pagination.vue'
import {getRandomUserByPage} from '../api/randomUser'
export default defineComponent({
  name:'App',
  components:{
    ModeControl,
    Pagination,
    CardModeUsers:defineAsyncComponent(() => import('./CardModeUsers.vue')),
    ListModeUsers:defineAsyncComponent(() => import('./ListModeUsers.vue'))
  },
  
  async setup() {
    let randomUsers = reactive({users:[],currentPage:0,mode:'card'})

    const fetchData = async (page:number,num:number) => {
      const res = await getRandomUserByPage(page,num)
      randomUsers.users = res.data.results
      randomUsers.currentPage = res.data.info.page
      window.scrollTo(0,0);
    }

    await fetchData(1,30)

    interface ChangePageObj {
      page:number,
      num:number
    }
    
    const changePage = ({page,num}:ChangePageObj) => {
      fetchData(page,num)
    }

    const changeMode = (val:string) => {
      randomUsers.mode = val
    }

    return {
      fetchData,
      changePage,
      randomUsers,
      changeMode
    }
  }
})
</script>