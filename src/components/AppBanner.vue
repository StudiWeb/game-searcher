<template>
  <div class="banner p-6">
    <div class="text-center">
      <div class="text-6xl text-primary font-bold mb-4">Game searcher</div>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <AutoComplete
            v-model="title"
            :suggestions="searchedGamesByTitle"
            @focus="toggleSearchGamesDialog"
            placeholder="Search games ..."
        >
            <template #option="slotProps">
                <div class="flex align-items-center gap-4">
                    <img class="w-4rem" :src="slotProps.option.background_image" :alt="slotProps.option.name">
                    {{slotProps.option.name}}
                </div>
            </template>
        </AutoComplete>
      </span>
    </div>
  </div>
</template>

<script>
import { useGameListStore } from '@/stores/gameList'
import { mapState ,mapActions } from 'pinia'
export default {
  data() {
    return {
      title: null,
      isSearchGamesDialogVisible: false
    }
  },

  computed: {
      ...mapState(useGameListStore, ['searchedGamesByTitle'])
  },

  methods: {
    ...mapActions(useGameListStore, ['searchGamesByTitle']),
    toggleSearchGamesDialog() {
        this.isSearchGamesDialogVisible = !this.isSearchGamesDialogVisible
    }
  }
}
</script>
