<template>
  <div>
    <AutoComplete @focus="toggleSearchGamesDialog" placeholder="Search games ..." />
    <Dialog
      v-model:visible="isSearchGamesDialogVisible"
      modal
      dismissable-mask
      :pt="{
        mask: {
          style: 'backdrop-filter: blur(2px)'
        }
      }"
      :draggable="false"
      header="Find your game"
      :style="{ width: '50vw' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      @hide="resetData"
    >
      <div class="flex flex-column p-4 gap-4">
        <div class="inline-flex flex-column gap-2">
          <AutoComplete
            v-model="title"
            :pt="{
              root: { class: 'w-full' },
              input: { class: 'w-full' }
            }"
          />
        </div>
        <div>
          <div>Found {{gamesByTitleStore.count}} results.</div>
          <ScrollPanel style="width: 100%">
            <DataView
              v-if="games.length > 0"
              :value="games"
              :lazy="true"
              data-key="id"
              paginator
              :rows="gamesByTitleStore.perPage"
              :total-records="gamesByTitleStore.count"
              paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
              @page="onPage"
            >
              <template #list="slotProps">
                <div class="grid grid-nogutter">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                    <div class="py-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
                      <div class="flex flex-column lg:flex-row gap-3 justify-content-between">
                        <div
                          class="flex flex-column lg:flex-row align-items-center lg:align-items-start gap-3"
                        >
                          <img
                            class="max-h-8rem max-w-12rem border-round"
                            :src="item.background_image"
                            :alt="item.name"
                          />
                          <div
                            class="flex flex-column align-items-center lg:align-items-start gap-2"
                          >
                            <div class="font-bold text-900 max-w-18rem">{{ item.name }}</div>
                            <Rating
                              :model-value="item.rating"
                              readonly
                              :cancel="false"
                              class="text-lg"
                              :pt="{
                                onIcon: { class: 'text-yellow-500' }
                              }"
                            />
                            <div class="flex gap-2 text-sm">
                              <div class="font-medium">Release date:</div>
                              <div>{{ item.released }}</div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                              <span v-for="(genre, index) in item.genres" :key="genre.id">
                                <Button :label="genre.name" link size="small" class="p-0 text-sm" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          label="Learn more"
                          class="align-self-center text-xs"
                          rounded
                          size="small"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </DataView>
          </ScrollPanel>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
import { useGamesByTitleStore } from '@/stores/gamesByTitle'
import { mapState,mapActions } from 'pinia'

export default {
  data() {
    return {
      gamesByTitleStore: useGamesByTitleStore(),
      title: null,
      isSearchGamesDialogVisible: false,
    }
  },

  computed: {
      ...mapState(useGamesByTitleStore, ['games']),
  },

  watch: {
    title(value) {
      this.setSearchQuery(value)
      this.searchGames()
    }
  },

  methods: {
    ...mapActions(useGamesByTitleStore, ['setSearchQuery']),
    ...mapActions(useGamesByTitleStore, ['resetPaginationData']),
    ...mapActions(useGamesByTitleStore, ['searchGames']),
    ...mapActions(useGamesByTitleStore, ['onPage']),
    toggleSearchGamesDialog() {
      this.isSearchGamesDialogVisible = !this.isSearchGamesDialogVisible
    },
    resetData() {
        this.title = ''
        this.resetPaginationData()
    }
  }
}
</script>
