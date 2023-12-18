<template>
  <AppPage title="Games">
        <div class="flex gap-3 mb-8">
            <AutoComplete
                v-model="searchPhrase"
                placeholder="Search for a game"
                :pt="{
                  input: { class: 'w-30rem border-round-2xl' },
                  item: ({ props, state, context }) => ({
                      class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                  })
              }"
            />
            <Dropdown
                    v-model="selectedGenre"
                    :options="genres"
                    optionLabel="name"
                    placeholder="Genres"
                    :pt="{
                      root: { class: 'w-12rem border-round-2xl' },
                    }"
            />
            <Dropdown
                    v-model="selectedPlatform"
                    :options="platforms"
                    optionLabel="name"
                    placeholder="Platforms"
                    :pt="{
                      root: { class: 'w-12rem border-round-2xl' },
                    }"
            />
        </div>
        <div class="grid">
          <div class="col">
              <GameCard
                v-for="game in firstColumnData"
                :key="game.id"
                :id="game.id"
                :name="game.name"
                :rating="game.rating"
                :release-date="game.released"
                :background-image-url="game.background_image"
                :genres="game.genres"
                :galleria="game.short_screenshots"
              />
          </div>
          <div class="col">
              <GameCard
                      v-for="game in secondColumnData"
                      :key="game.id"
                      :id="game.id"
                      :name="game.name"
                      :rating="game.rating"
                      :release-date="game.released"
                      :background-image-url="game.background_image"
                      :genres="game.genres"
                      :galleria="game.short_screenshots"
              />
          </div>
          <div class="col">
              <GameCard
                      v-for="game in thirdColumnData"
                      :key="game.id"
                      :id="game.id"
                      :name="game.name"
                      :rating="game.rating"
                      :release-date="game.released"
                      :background-image-url="game.background_image"
                      :genres="game.genres"
                      :galleria="game.short_screenshots"
              />
          </div>
          <div class="col">
              <GameCard
                      v-for="game in fourthColumnData"
                      :key="game.id"
                      :id="game.id"
                      :name="game.name"
                      :rating="game.rating"
                      :release-date="game.released"
                      :background-image-url="game.background_image"
                      :genres="game.genres"
                      :galleria="game.short_screenshots"
              />
          </div>
          <div class="col">
              <GameCard
                      v-for="game in fifthColumnData"
                      :key="game.id"
                      :id="game.id"
                      :name="game.name"
                      :rating="game.rating"
                      :release-date="game.released"
                      :background-image-url="game.background_image"
                      :genres="game.genres"
                      :galleria="game.short_screenshots"
              />
          </div>
        </div>
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage.vue";
import GameCard from "@/components/GameCard.vue";
import {mapState,mapActions} from "pinia";
import {useGamesStore} from "@/stores/games";
import {useGenresStore} from "@/stores/genres";
import {usePlatformsStore} from "@/stores/platforms";

export default {
    components: {
        AppPage,
        GameCard
    },

    data() {
        return {
            searchPhrase: '',
            selectedGenre: null,
            selectedPlatform: null
        }
    },

    computed: {
        ...mapState(useGenresStore,['genres']),
        ...mapState(usePlatformsStore,["platforms"]),
        ...mapState(useGamesStore,['firstColumnData']),
        ...mapState(useGamesStore,['secondColumnData']),
        ...mapState(useGamesStore,['thirdColumnData']),
        ...mapState(useGamesStore,['fourthColumnData']),
        ...mapState(useGamesStore,['fifthColumnData']),
    },

    mounted() {
      this.loadGenres()
      this.loadPlatforms()
      this.loadGames()
    },

    methods: {
        ...mapActions(useGenresStore,['loadGenres']),
        ...mapActions(usePlatformsStore,['loadPlatforms']),
        ...mapActions(useGamesStore,['loadGames'])
    }
}
</script>
