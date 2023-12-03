import { defineStore } from 'pinia'

export const useGameListStore = defineStore('gameList', {
  state: () => ({
    currentPage: 1,
    perPage: 20,
    numberOfColumns: 4,
    gameList: [],
    firstColumn: [],
    secondColumn: [],
    thirdColumn: [],
    fourthColumn: [],
  }),

  getters: {
    firstColumnData: (state) => {
      let startIndex = (state.perPage * state.currentPage ) - state.perPage
      let endIndex = (state.perPage * state.currentPage ) - state.perPage + (state.perPage / state.numberOfColumns)
      let data = state.gameList.slice(startIndex,endIndex)
      data.forEach(data => state.firstColumn.push(data))
      return state.firstColumn
    },

    secondColumnData: (state) => {
      let startIndex = (state.perPage * state.currentPage ) - state.perPage + 5
      let endIndex = (state.perPage * state.currentPage ) - state.perPage + (state.perPage / state.numberOfColumns) + 5
      let data = state.gameList.slice(startIndex,endIndex)
      data.forEach(data => state.secondColumn.push(data))
      return state.secondColumn
    },

    thirdColumnData: (state) => {
      let startIndex = (state.perPage * state.currentPage ) - state.perPage + 10
      let endIndex = (state.perPage * state.currentPage ) - state.perPage + (state.perPage / state.numberOfColumns) + 10
      let data = state.gameList.slice(startIndex,endIndex)
      data.forEach(data => state.thirdColumn.push(data))
      return state.thirdColumn
    },

    fourthColumnData: (state) => {
      let startIndex = (state.perPage * state.currentPage ) - state.perPage + 15
      let endIndex = (state.perPage * state.currentPage ) - state.perPage + (state.perPage / state.numberOfColumns) + 15
      let data = state.gameList.slice(startIndex,endIndex)
      data.forEach(data => state.fourthColumn.push(data))
      return state.fourthColumn
    },
  },

  actions: {

    async initGameList() {
      const response = await fetch(`https://api.rawg.io/api/games?key=bc86ef00b13b45ceb5a97af5c32e13f2&&page=${this.currentPage}&&per_page=${this.perPage}`)
      const games = await response.json()
      games.results.forEach(game => this.gameList.push(game))
    },

    nextPage() {
      this.currentPage++
      this.initGameList()
    }

  },

})