<template>
  <div class="flex flex-wrap">
    <div class="p-6 w-1/5 h-96" v-for="user in randomUsers.users" :key="user.id">
      <div class=" flex flex-col items-center justify-center gap-2 rounded-md bg-white h-full shadow hover:shadow-2xl text-lg font-semibold tracking-wide">
        <img :src='user.picture.large' class="max-w-full rounded-full border-double border-4 border-indigo-300">
        <div>
          <font-awesome-icon :icon="['fas', 'user']" class="mr-2" />{{`${user.name.first} ${user.name.last}`}}
        </div>
        <div>
          <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2" />{{user.location.city}}
        </div>
        <button class="w-40 h-10 border-2 border-purple-400 text-purple-400 hover:border-none hover:text-white hover:bg-purple-400 tracking-wide font-semibold rounded-md">View Details</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, watch} from 'vue'
export default defineComponent({
  name:'CardModeUsers',
  props:{
    randomUsers:{
      type:Object,
      required:true
    }
  },

  setup() {
    return {
    }
  }
})
</script>