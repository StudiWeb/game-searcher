<template>
  <div class="">
    <div class="relative p-8 overflow-hidden">
      <img
        src="assets/images/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it.jpg"
        alt="Image"
        class="absolute top-0 left-0 w-auto h-full block md:w-full"
      />
      <div class="text-center my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width: 500px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <button
          class="p-button p-component"
          type="button"
          aria-label="Learn More"
          data-pc-name="button"
          data-pc-section="root"
          data-pd-ripple="true"
        >
          <!----><span class="p-button-label" data-pc-section="label">Learn More</span>
          <!----><span
            role="presentation"
            aria-hidden="true"
            data-p-ink="true"
            data-p-ink-active="false"
            class="p-ink"
            data-pc-name="ripple"
            data-pc-section="root"
          ></span>
        </button>
        <p class="text-sm mt-4 mb-4 line-height-3 text-white">
          Available for MacOS, Web and Google accounts only
        </p>
        <div class="flex justify-content-center align-items-center">
          <a href="https://www.apple.com" class="text-white mr-3"
            ><i class="pi pi-apple text-2xl"></i></a
          ><a href="https://play.google.com" class="text-white mr-3"
            ><i class="pi pi-android text-2xl"></i></a
          ><a href="https://www.facebook.com" class="text-white"
            ><i class="pi pi-facebook text-2xl"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-column gap-4">
    <div class="flex flex-wrap gap-4 mx-auto">
      <div class="flex flex-column gap-4">
        <GameCard
          v-for="(item, index) in firstColumnData"
          :key="index"
          :id="item.id"
          :name="item.name"
          :release-date="item.released"
          :background-image-url="item.background_image"
          :genres="item.genres"
          :galleria="item.short_screenshots"
          :rating="item.rating"
        />
      </div>
      <div class="flex flex-column gap-4">
        <GameCard
          v-for="(item, index) in secondColumnData"
          :key="index"
          :id="item.id"
          :name="item.name"
          :release-date="item.released"
          :background-image-url="item.background_image"
          :genres="item.genres"
          :galleria="item.short_screenshots"
          :rating="item.rating"
        />
      </div>
      <div class="flex flex-column gap-4">
        <GameCard
          v-for="(item, index) in thirdColumnData"
          :key="index"
          :id="item.id"
          :name="item.name"
          :release-date="item.released"
          :background-image-url="item.background_image"
          :genres="item.genres"
          :galleria="item.short_screenshots"
          :rating="item.rating"
        />
      </div>
      <div class="flex flex-column gap-4">
        <GameCard
          v-for="(item, index) in fourthColumnData"
          :key="index"
          :id="item.id"
          :name="item.name"
          :release-date="item.released"
          :background-image-url="item.background_image"
          :genres="item.genres"
          :galleria="item.short_screenshots"
          :rating="item.rating"
        />
      </div>
    </div>
    <Button @click="nextPage" label="Load more" class="align-self-center m-5" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGameListStore } from '@/stores/gameList'
import GameCard from '@/components/GameCard.vue'

export default {
  components: {
    GameCard
  },

  data() {
    return {
      games: [],
      page: 1,
      perPage: 20
    }
  },

  computed: {
    ...mapState(useGameListStore, ['firstColumnData']),
    ...mapState(useGameListStore, ['secondColumnData']),
    ...mapState(useGameListStore, ['thirdColumnData']),
    ...mapState(useGameListStore, ['fourthColumnData'])
  },

  async mounted() {
    await this.loadGames()
  },

  methods: {
    ...mapActions(useGameListStore, ['loadGames']),
    ...mapActions(useGameListStore, ['nextPage'])
  }
}
</script>

<style scoped>
.scale {
  transition: all 0.25s;
  transform: scale(1.05);
}
</style>
