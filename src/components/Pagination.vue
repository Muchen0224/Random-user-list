<template>
  <div class="flex justify-center">
    <div class="flex">
      <PaginationButton v-if="randomUsers.currentPage > 2" @click="handlePageClick(randomUsers.currentPage-1)">
        <font-awesome-icon :icon="['fas', 'caret-left']" class="mr-2" />
      </PaginationButton>
      <PaginationButton v-if="randomUsers.currentPage > 2" @click="handlePageClick(1)">1</PaginationButton>
      <PaginationButton v-if="randomUsers.currentPage > 2">
        <font-awesome-icon :icon="['fas', 'ellipsis']" class="mr-2" />
      </PaginationButton>
      <PaginationButton v-for="page in pageList" :key="page" :class='{active : randomUsers.currentPage === page}' @click="handlePageClick(page)">
        {{page}}
      </PaginationButton>
      <PaginationButton v-if="randomUsers.currentPage < 100">
        <font-awesome-icon :icon="['fas', 'ellipsis']" class="mr-2" />
      </PaginationButton>
      <PaginationButton @click="handlePageClick(101,10)" v-if="randomUsers.currentPage < 100">101</PaginationButton>
      <PaginationButton v-if="randomUsers.currentPage < 100" @click="handlePageClick(randomUsers.currentPage+1)">
        <font-awesome-icon :icon="['fas', 'caret-right']" class="mr-2" />
      </PaginationButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import PaginationButton from './PaginationButton.vue'
export default defineComponent({
  name: 'PaginationComponent',
  props: {
    randomUsers: {
      type: Object,
      required: true
    }
  },
  components: {
    PaginationButton
  },

  setup (props, { emit }) {
    const pageList = ref([1, 2, 3])

    watch(() => props.randomUsers.currentPage, (cur) => {
      if (cur <= 2) {
        pageList.value = [1, 2, 3]
      } else if (cur >= 100) {
        pageList.value = [99, 100, 101]
      } else {
        pageList.value = [cur - 1, cur, cur + 1]
      }
    }, { immediate: true })

    const handlePageClick = (page:number, num = 30) => {
      if (page === 101) {
        emit('changePage', { page, num: 10 })
      } else {
        emit('changePage', { page, num })
      }
    }

    return {
      handlePageClick,
      pageList
    }
  }
})
</script>

<style scoped>
  .active {
    color: #fff;
    background-color: #c084fc !important;
    border: none !important;
  }

  svg {
    margin: 0px;
  }
</style>
