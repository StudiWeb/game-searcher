<template>
    <div class="grid">
        <Menu :model="items" class="col-fixed" style="width:180px" />
        <div class="col flex">
            <div class="grid">
                <GameCard
                    class="col-4"
                    v-for="game in gamesByGenreList"
                    :key="game.id"
                    :title="game.name"
                    :image-url="game.background_image"
                />
            </div>
        </div>
    </div>

</template>

<script>
import {mapActions, mapState} from "pinia";
import GameCard from "@/components/GameCard.vue";
import {useGameGenresStore} from "@/stores/gameGenres";
import { useGamesByGenreStore } from "@/stores/gamesByGenres";

export default {

    components: {
        GameCard
    },

    data() {
        return {
            items: [
                {
                    label: 'Game genres',
                    items: []
                },
            ]
        };
    },

    computed: {
        ...mapState(useGameGenresStore, ['gameGenreList']),
        ...mapState(useGamesByGenreStore, ['gamesByGenreList']),
    },

    async mounted() {
        await this.loadGameGenres()
        this.gameGenreList.forEach((genre) => {
            this.items[0].items.push({
                label: genre.name,
                command: () => {
                    this.loadGamesByGenre(genre.slug)
                }
            })
        })
    },

    methods: {
        ...mapActions(useGameGenresStore, ['loadGameGenres']),
        ...mapActions(useGamesByGenreStore, ['loadGamesByGenre'])
    }
}
</script>