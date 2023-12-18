<template>
  <div
    @mouseenter="openGameCard(id)"
    @mouseleave="closeGameCard"
    class="mb-4"
    :class="{ relative: isFullGameCard }"
    :style="[
      id === hoveredGameCardId ? { height: `${hoveredGameCardImageHeight}px` } : { height: 'auto' }
    ]"
  >
      <Card
        class="game-card"
        :class="{ 'absolute top-0 left-0 z-5 scale': isFullGameCard }"
        :pt="{
          root: { class: 'p-0 border border-2 border-round-lg' },
          body: { class: 'p-0' },
          content: { class: 'p-0 ' }
        }"
      >
          <template #content>
              <div :ref="`game-card-${id}`">
                  <div>
                      <img :src="backgroundImageUrl" :alt="name" class="w-full border-round-top-lg">
                      <div class="p-3 flex align-items-center justify-content-between">
                          <div class="text-2xl font-bold text-white">{{name}}</div>
                      </div>
                  </div>
                  <div v-if="isFullGameCard" class="flex flex-column gap-4 p-3">
                      <div class="flex justify-content-between">
                          <div class="font-medium">Release date:</div>
                          <Button :label="releaseDate" link size="small" class="p-0" />
                      </div>
                      <div class="flex justify-content-between">
                          <div class="font-medium">Genres</div>
                          <div class="flex flex-wrap gap-2">
                                <Tag v-for="genre in genres" :key="genre.id" :value="genre.name"></Tag>
                          </div>
                      </div>
                      <Button outlined rounded class="w-full" size="small">
                          <div class="w-full flex justify-content-between">
                              <span>More details</span>
                              <i class="pi pi-angle-right"></i>
                          </div>
                      </Button>
                  </div>
              </div>
          </template>
      </Card>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    releaseDate: String,
    backgroundImageUrl: String,
    genres: Array,
    galleria: Array,
    rating: Number
  },

  data() {
    return {
      hoveredGameCardImageHeight: null,
      hoveredGameCardId: null,
      isFullGameCard: false
    }
  },

  methods: {
    openGameCard(gameId) {
      this.hoveredGameCardImageHeight = this.$refs[`game-card-${gameId}`].clientHeight
      this.hoveredGameCardId = gameId
      this.isFullGameCard = true
    },

    closeGameCard() {
      this.isFullGameCard = false
    }
  }
}
</script>

<style scoped lang="scss">
.game-card {
    background-color: #242424;
}

.scale {
  transition: all 0.5s;
  transform: scale(1.05);
}
</style>
