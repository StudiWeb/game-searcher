<template>
    <div class="h-screen w-20rem flex flex-column justify-content-center">
        <div class="flex flex-column gap-2">
            <router-link
                v-for="item in menuItems"
                :to="item.to"
                class="menu-item p-4 text-3xl font-bold"
                :class="{'menu-item--active': $route.name === item.label.toLowerCase()}"
            >
                {{item.label}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    id: 'games',
                    to: {name: 'games'},
                    label: 'Games'
                },
                {
                    id: 'stores',
                    to: {name: 'stores'},
                    label: 'Stores'
                },
                {
                    id: 'developers',
                    to: {name: 'developers'},
                    label: 'Developers'
                },
                {
                    id: 'publishers',
                    to: {name: 'publishers'},
                    label: 'Publishers'
                }
            ]
        }
    },
}
</script>

<style scoped lang="scss">
.menu-item {
    color: #fff !important;
    text-decoration: none;
    transition-property: transform;
    transition-duration: .5s;

    &:hover {
        transform: translateX(2rem);
    }

    &--active {
        color: #D91480 !important;
        transform: translateX(2rem);
    }
}
</style>