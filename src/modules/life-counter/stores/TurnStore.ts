import {defineStore} from 'pinia'

export const useTurnStore = defineStore({
  id: 'turn',
  state: () => ({
    turn: 1
  }),
  actions: {
    inc() {
      this.turn += 1;
    },
    dec() {
      if (this.turn === 1) return;
      this.turn -= 1
    }
  },
  getters: {
    mana: (state) => {
      if(state.turn>= 5) return 10
      return state.turn * 2
    }
  }
})