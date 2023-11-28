<template>
    <div>
        <div v-if="games && Array.isArray(games)">
            <DataView :value="games" layout="grid">
                <template #grid="slotProps">
                    <div class="flex flex-wrap justify-content-center gap-4">
                        <div class="flex flex-column gap-4">
                            <GameCard
                                v-for="(item, index) in slotProps.items.slice(0,5)"
                                :key="index"
                                :id="item.id"
                                :name="item.name"
                                :release-date="item.released"
                                :background-image-url="item.background_image"
                                :genres="item.genres"
                            />
                        </div>
                        <div class="flex flex-column gap-4">
                            <GameCard
                                v-for="(item, index) in slotProps.items.slice(5,10)"
                                :key="index"
                                :id="item.id"
                                :name="item.name"
                                :release-date="item.released"
                                :background-image-url="item.background_image"
                                :genres="item.genres"
                            />
                        </div>
                        <div class="flex flex-column gap-4">
                            <GameCard
                                v-for="(item, index) in slotProps.items.slice(10,15)"
                                :key="index"
                                :id="item.id"
                                :name="item.name"
                                :release-date="item.released"
                                :background-image-url="item.background_image"
                                :genres="item.genres"
                            />
                        </div>
                        <div class="flex flex-column gap-4">
                            <GameCard
                                v-for="(item, index) in slotProps.items.slice(15,20)"
                                :key="index"
                                :id="item.id"
                                :name="item.name"
                                :release-date="item.released"
                                :background-image-url="item.background_image"
                                :genres="item.genres"
                            />
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";
export default {

    components: {
      GameCard
    },

    data() {
        return {
            games: null,
            isFullCard: false,
            onMouseEnterGameId: null,
            hoveredCardTopHeight: null,
            customStyle: {
                height: 'auto'
            }
        }
    },

    async mounted() {
        const response = await fetch('https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2')
        const games = await response.json()
        this.games = games.results
    },


    methods: {
        openGameCard(gameId) {
            this.hoveredCardTopHeight = this.$refs[`game-card-top-${gameId}`][0].clientHeight
            this.customStyle.height = this.$refs[`game-card-top-${gameId}`][0].clientHeight
            this.onMouseEnterGameId = gameId
            this.isFullCard = true
        },

        closeGameCard() {
            this.customStyle.height = 'auto'
            this.isFullCard = false
        },
    }
}
</script>

<style scoped>
.scale {
    transition: all .25s;
    transform: scale(1.05);
}
</style>