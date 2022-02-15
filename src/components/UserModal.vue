<template>
  <transition name="modal-animation">
    <div v-show="modeConfig.modalActive" @click="closeModal" class="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-black/70">
      <transition v-show="modeConfig.modalActive" name="modal-animation-inner">
        <div v-if="modeConfig.modalActive" class="relative w-1/2 shadow-xl px-4 py-2 rounded-md opacity-100 bg-white">
          <div class="flex gap-x-6 px-4 py-6">
            <img :src='modeConfig.user.picture.large' class="max-w-full  border-double border-4 border-indigo-300 rounded-full">
            <div>
              <h4 class="font-semibold tracking-wide mb-3">Self introduction : </h4>
              <p class="font-medium tracking-wide">
                My name is {{`${modeConfig.user.name.first} ${modeConfig.user.name.last}`}}. I was brought up in {{modeConfig.user.location.city}} City where there is a railroad crossing near my home. There are five members in my family; they are my  parents, sister, my precious puppy and I.
              </p>
            </div>
          </div>
          <hr class="my-4 border-purple-400 border-dashed">
          <div class="flex p-4">
            <ul class="w-1/2">
              <li class="font-semibold tracking-wide"><font-awesome-icon :icon="['fas', 'user']" class="mr-2 text-purple-400" />{{`${modeConfig.user.name.first} ${modeConfig.user.name.last}`}}</li>
              <li class="font-semibold tracking-wide"><font-awesome-icon :icon="['fas', 'envelope']" class="mr-2 text-purple-400" />{{modeConfig.user.email}}</li>
              <li class="font-semibold tracking-wide"><font-awesome-icon :icon="['fas', 'phone']" class="mr-2 text-purple-400" />{{modeConfig.user.phone}}</li>
            </ul>
            <ul class="w-1/2">
              <li class="font-semibold tracking-wide"><font-awesome-icon :icon="['fas', 'mars-and-venus']" class="mr-2 text-purple-400" />{{`${modeConfig.user.gender}`}}</li>
              <li class="font-semibold tracking-wide"><font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2 text-purple-400" />{{modeConfig.user.location.city}}</li>
            </ul>
          </div>
          <button @click="closeModal" class="absolute top-2 right-2 text-2xl hover:text-purple-400"><font-awesome-icon :icon="['fas', 'xmark']" class="mr-2" /></button>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'UserModal',
  props:{
    modeConfig:{
      type:Object,
      required:true
    }
  },
  setup(props,{emit}) {
    const closeModal  = () => {
      emit('closeModal')
    }
    return {
      closeModal
    }
  }
})
</script>

<style scoped>
  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }
  .modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  .modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  .modal-animation-inner-leave-to {
    transform: scale(0.8);
  }
</style>

