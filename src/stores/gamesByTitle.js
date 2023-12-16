import { defineStore } from 'pinia'

export const useGamesByTitleStore = defineStore('gamesByTitle', {
  state: () => ({
    data: [],
    search: '',
    count: 0,
    perPage: 10,
    currentPage: 1,
    loading: false
  }),

  getters: {
    games(state) {
        return state.data
    }
  },

  actions: {
    setSearchQuery(search) {
      this.search = search
    },

    resetPaginationData() {
        this.data = []
        this.count = 0
    },

     searchGames() {
        setTimeout(async () => {
            if(this.search === '') {
                this.resetPaginationData()
            } else {
                this.currentPage = 1
                const response = await fetch(
                    `https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2&&search=${this.search}&&page_size=${this.perPage}&&page=${this.currentPage}`
                )
                const result = await response.json()
                this.count = result.count
                this.data = result.results
            }
        },1000)

    },

    async onPage(data) {
      setTimeout(async () => {
          this.currentPage = data.page + 1
          const response = await fetch(
              `https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2&&search=${this.search}&&page_size=${this.perPage}&&page=${this.currentPage}`
          )
          const result = await response.json()
          this.count = result.count
          this.data = result.results
      },500)
    }
  }
})
