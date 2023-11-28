<template>
    <div
            @mouseenter="openGameCard(id)"
            @mouseleave="closeGameCard"
            class="w-20rem"
            :style="[hoveredGameCardId === id ? {'height' : `${hoveredGameCardImageHeight}px`} : {'height' : 'auto'}]"
            :class="{'relative': isFullGameCard && hoveredGameCardId === id}"

    >
        <Card
                :class="{'absolute top-0 left-0 z-5 scale': isFullGameCard && hoveredGameCardId === id}"
                :pt="{
                    root: {class : 'p-0'},
                    body: {class : 'p-0'},
                    content: {class : 'p-0'},
                }"
        >
            <template #content>
                <div>
                    <div :ref="`game-card-top-${id}`">
                        <img :src="backgroundImageUrl" :alt="name" class="w-20rem">
                        <div class="text-xl font-bold p-4">{{ name }}</div>
                    </div>
                    <div
                            v-if="isFullGameCard && hoveredGameCardId === id"
                            class="flex flex-column gap-3 p-3 z-5s"
                    >
                        <div class="flex justify-content-between">
                            <div class="font-medium">Release date:</div>
                            <Button :label="releaseDate" link size="small" class="p-0"/>
                        </div>
                        <div class="flex justify-content-between">
                            <div class="font-medium">Genres</div>
                            <div class="flex flex-wrap gap-2">
                                <Button v-for="genre in genres" :key="genre.id"
                                        :label="genre.name" link size="small" class="p-0"/>
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
        genres: Array
    },

    data() {
        return {
            hoveredGameCardImageHeight: null,
            hoveredGameCardId: null,
            isFullGameCard: false,
        }
    },

    methods: {
        openGameCard(gameId) {
            this.hoveredGameCardImageHeight = this.$refs[`game-card-top-${gameId}`].clientHeight
            this.hoveredGameCardId = gameId
            this.isFullGameCard = true
        },

        closeGameCard() {
            this.isFullGameCard = false
        },
    }
}
</script>

<style scoped>
.scale {
    transition: all .5s;
    transform: scale(1.05);
}
</style>