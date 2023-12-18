import {defineStore} from "pinia";

export const useGameGenresStore = defineStore('gameGenres',{
    state: () => ({
        genres: []
    }),

    getters: {
      gameGenreList(state) {
          return state.genres
      }
    },

    actions: {
        async loadGameGenres() {
           await fetch('https://api.rawg.io/api/genres?key=bc86ef00b13b45ceb5a97af5c32e13f2')
                .then((response) => {
                    if(response.ok) {
                        return response.json()
                    }
                })
                .then((data) => {
                    this.genres = data.results
                })
        }
    }
})