import {defineStore} from "pinia";

export const useGenresStore = defineStore('genres',{
    state: () => ({
        data: []
    }),

    getters: {
      genres(state) {
          return state.data
      }
    },

    actions: {
        async loadGenres() {
           await fetch('https://api.rawg.io/api/genres?key=bc86ef00b13b45ceb5a97af5c32e13f2')
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