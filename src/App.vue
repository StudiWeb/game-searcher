<template>
<!--  <AppBanner />-->
  <GameList />
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useGameGenresStore } from "@/stores/gameGenres";
import AppBanner from '@/components/AppBanner.vue'
import GameList from "@/components/GamesByGenreList.vue";

export default {
  components: {
    AppBanner,
    GameList
  },

  computed: {
      ...mapState(useGameGenresStore, ['gameGenres'])
  },

  async mounted() {
    await this.loadGameGenres()
  },

  methods: {
    ...mapActions(useGameGenresStore, ['loadGameGenres'])
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
