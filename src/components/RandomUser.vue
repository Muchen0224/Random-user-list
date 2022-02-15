<template>
  <div ref="usersDom" class="w-full min-h-screen px-8 py-6 bg-purple-50 overflow-y-auto h-screen overflow-auto">
    <ModeControl :mode='randomUsers.mode' @changeMode='changeMode' />
    <suspense>
      <template #default>
        <CardModeUsers :randomUsers='randomUsers' v-if="randomUsers.mode === 'card'" @openModal='openModal'/>
        <ListModeUsers :randomUsers='randomUsers' v-else @openModal='openModal'/>
      </template>
      <template #fallback>
        <Loading/>
      </template>
    </suspense>
    <Pagination :randomUsers='randomUsers' @changePage='changePage'/>
    <UserModal :modeConfig='modeConfig' @closeModal='closeModal'/>
  </div>
</template>
<script lang='ts'>
import {defineComponent, defineAsyncComponent, reactive, ref} from 'vue'
import ModeControl from './ModeControl.vue'
import Pagination from './Pagination.vue'
import Loading from './Loading.vue'
import {getRandomUserByPage} from '../api/randomUser'
export default defineComponent({
  name:'RansomUser',
  components:{
    ModeControl,
    Pagination,
    CardModeUsers:defineAsyncComponent(() => import('./CardModeUsers.vue')),
    ListModeUsers:defineAsyncComponent(() => import('./ListModeUsers.vue')),
    UserModal:defineAsyncComponent(() => import('./UserModal.vue')),
    Loading
  },
  
  async setup() {
    let randomUsers = reactive({users:[],currentPage:0,mode:'card'})
    let modeConfig = reactive({modalActive:false,user:{}})
    const usersDom = ref<HTMLElement | null>(null)

    const fetchData = async (page:number,num:number) => {
      const res = await getRandomUserByPage(page,num)
      randomUsers.users = res.data.results
      randomUsers.currentPage = res.data.info.page;
      if(usersDom.value) {
        usersDom.value.scrollTop = 0
      }
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

    const openModal = (user:Object) => {
      modeConfig.modalActive = true
      modeConfig.user = user
    }

    const closeModal = () => {
      modeConfig.modalActive = false
    }

    return {
      fetchData,
      changePage,
      randomUsers,
      changeMode,
      modeConfig,
      openModal,
      closeModal,
      usersDom
    }
  }
})
</script>