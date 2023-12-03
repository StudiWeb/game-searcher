<template>
    <div>
        <div class="flex flex-wrap gap-4">
            <div class="flex flex-column gap-4">
                <GameCard
                    v-for="(item, index) in firstColumnData"
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
                    v-for="(item, index) in secondColumnData"
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
                    v-for="(item, index) in thirdColumnData"
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
                    v-for="(item, index) in fourthColumnData"
                    :key="index"
                    :id="item.id"
                    :name="item.name"
                    :release-date="item.released"
                    :background-image-url="item.background_image"
                    :genres="item.genres"
                />
            </div>
            <Button @click="nextPage" label="Load more" class="align-self-center m-5"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions  } from 'pinia'
import { useGameListStore } from '@/stores/gameList'
import GameCard from "@/components/GameCard.vue";

export default {

    components: {
        GameCard
    },

    data() {
        return {
            games: [],
            page: 1,
            perPage: 20,
        }
    },

    computed: {
        ...mapState(useGameListStore, ['firstColumnData']),
        ...mapState(useGameListStore, ['secondColumnData']),
        ...mapState(useGameListStore, ['thirdColumnData']),
        ...mapState(useGameListStore, ['fourthColumnData']),
    },

    async mounted() {
        await this.initGameList()
    },

    methods: {
        ...mapActions(useGameListStore, ['initGameList']),
        ...mapActions(useGameListStore, ['nextPage']),
    }
}
</script>

<style scoped>
.scale {
    transition: all .25s;
    transform: scale(1.05);
}
</style>