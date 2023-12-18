<template>
  <div
    @mouseenter="openGameCard(id)"
    @mouseleave="closeGameCard"
    :style="[
      id === hoveredGameCardId ? { height: `${hoveredGameCardImageHeight}px` } : { height: 'auto' }
    ]"
    :class="{ relative: isFullGameCard }"
    class="mb-4"
  >
    <div>
      <Card
        :class="{ 'absolute top-0 left-0 z-5 scale': isFullGameCard }"
        :pt="{
          root: { class: 'p-0' },
          body: { class: 'p-0' },
          content: { class: 'p-0' }
        }"
      >
        <template #content>
          <div :ref="`game-card-${id}`">
            <Galleria
              :value="galleria"
              :numVisible="5"
              :showThumbnails="false"
              :showIndicators="true"
              :changeItemOnIndicatorHover="true"
              :showIndicatorsOnItem="true"
              indicatorsPosition="bottom"
              :pt="{
                indicator: { class: 'flex h-full w-2rem mx-1' },
                indicators: (options) => ({
                  class: [
                    'h-full',
                    {
                      flex: isFullGameCard
                    }
                  ]
                })
              }"
            >
              <template #item="slotProps">
                <div class="relative">
                  <div class="absolute top-0 z-2 p-4 text-lg font-bold text-white">{{ name }}</div>
                  <img :src="slotProps.item.image" style="width: 100%; display: block" />
                </div>
              </template>
              <template #indicator="{ index }">
                <div class="galleria-game-indicator hidden" :class="{ block: isFullGameCard }">
                  <span></span>
                </div>
              </template>
            </Galleria>
            <div v-if="isFullGameCard" class="flex flex-column gap-4 p-4">
              <div class="flex justify-content-between">
                <div class="font-medium">Rating:</div>
                <Rating
                  :model-value="rating"
                  readonly
                  :cancel="false"
                  :pt="{
                    onIcon: { class: 'text-yellow-500' }
                  }"
                />
              </div>
              <div class="flex justify-content-between">
                <div class="font-medium">Release date:</div>
                <Button :label="releaseDate" link size="small" class="p-0" />
              </div>
              <div class="flex justify-content-between">
                <div class="font-medium">Genres</div>
                <div class="flex gap-2">
                  <span v-for="(genre, index) in genres" :key="genre.id">
                    <Button v-if="index < 2" :label="genre.name" link size="small" class="p-0" />
                  </span>
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

<style scoped>
:deep(.p-galleria.p-galleria-indicator-onitem .p-galleria-indicators) {
  background: rgba(0, 0, 0, 0.25);
}

.galleria-game-indicator {
  background: #fff;
  height: 0.25rem;
  width: 2rem;
  align-self: end;
}

.scale {
  transition: all 0.5s;
  transform: scale(1.05);
}
</style>
