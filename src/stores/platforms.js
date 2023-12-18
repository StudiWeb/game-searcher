import {defineStore} from "pinia";

export const usePlatformsStore = defineStore('platforms',{
    state: () => ({
        data: []
    }),

    getters: {
        platforms(state) {
            return state.data
        }
    },

    actions: {
        async loadPlatforms() {
            await fetch('https://api.rawg.io/api/platforms?key=bc86ef00b13b45ceb5a97af5c32e13f2')
                .then((response) => {
                    if(response.ok) {
                        return response.json()
                    }
                })
                .then((data) => {
                    this.data = data.results
                })
        }
    }
})