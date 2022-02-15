<template>
  <div class="w-full h-24 bg-white rounded-md shadow-md hover:shadow-xl my-5 flex items-center px-4 py-2" v-for="user in randomUsers.users" :key="user.id">
    <div class="w-1/3">
      <img :src='user.picture.medium' class="max-w-full rounded-full border-double border-4 border-indigo-300">
    </div>
    <div class="w-1/3">
      <font-awesome-icon :icon="['fas', 'user']" class="mr-2" />{{`${user.name.first} ${user.name.last}`}}
    </div>
    <div class="w-1/3">
      <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />{{user.location.city}}
    </div>
    <button @click="openModal(user)" class="w-40 h-10 border-2 border-purple-400 text-purple-400 hover:border-none hover:text-white hover:bg-purple-400 tracking-wide font-semibold rounded-md">View Details</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'ListModeUsers',
  props:{
    randomUsers:{
      type:Object,
      required:true
    }
  },

  setup(props,{emit}) {
    const openModal = (user:Object) => {
      emit('openModal',user)
    }
    return {
      openModal
    }
  }
})
</script>