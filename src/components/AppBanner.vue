<template>
  <div class="banner p-6">
    <div class="text-center">
      <div class="text-6xl text-primary font-bold mb-4">Game searcher</div>
      <SearchGames />
    </div>
  </div>
</template>

<script>
import SearchGames from '@/components/SearchGames.vue'
export default {
  components: {
    SearchGames
  }
}
</script>
