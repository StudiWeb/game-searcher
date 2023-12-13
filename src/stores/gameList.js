import { defineStore } from 'pinia'

export const useGameListStore = defineStore('gameList', {
  state: () => ({
    currentPage: 1,
    perPage: 20,
    numberOfColumns: 4,
    gameList: [],
    searchedGamesByTitle: [],
    firstColumn: [],
    secondColumn: [],
    thirdColumn: [],
    fourthColumn: []
  }),

  getters: {
    firstColumnData: (state) => {
      let startIndex = state.perPage * state.currentPage - state.perPage
      let endIndex =
        state.perPage * state.currentPage - state.perPage + state.perPage / state.numberOfColumns
      let data = state.gameList.slice(startIndex, endIndex)
      data.forEach((data) => state.firstColumn.push(data))
      return state.firstColumn
    },

    secondColumnData: (state) => {
      let startIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns)
      let endIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns) * 2
      let data = state.gameList.slice(startIndex, endIndex)
      data.forEach((data) => state.secondColumn.push(data))
      return state.secondColumn
    },

    thirdColumnData: (state) => {
      let startIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns) * 2
      let endIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns) * 3
      let data = state.gameList.slice(startIndex, endIndex)
      data.forEach((data) => state.thirdColumn.push(data))
      return state.thirdColumn
    },

    fourthColumnData: (state) => {
      let startIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns) * 3
      let endIndex =
        state.perPage * state.currentPage -
        state.perPage +
        Math.floor(state.perPage / state.numberOfColumns) * 4
      let data = state.gameList.slice(startIndex, endIndex)
      data.forEach((data) => state.fourthColumn.push(data))
      return state.fourthColumn
    }
  },

  actions: {
    async loadGames() {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2&&page=${this.currentPage}&&page_size=${this.perPage}`
      )
      const games = await response.json()
      games.results.forEach((game) => this.gameList.push(game))
    },

    async searchGamesByTitle(title) {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2&&search=${title}&&page_size=10`
      )
      const result = await response.json()
      this.searchedGamesByTitle = result.results
    },

    nextPage() {
      this.currentPage++
      this.loadGames()
    }
  }
})
