import {defineStore} from 'pinia'

const DEFAULT_OPERATION = '-';
const DEFAULT_VALUE = ''
const DEFAULT_LIFE = 25
export const useLifeStore = (id: string) => defineStore({
  id: `${id}`,
  state: () => ({
    life: DEFAULT_LIFE,
    valueToOperate: DEFAULT_VALUE,
    operation: DEFAULT_OPERATION
  }),
  actions: {
    digit(value: number) { this.valueToOperate += `${value}` },
    clear() { 
      this.operation = DEFAULT_OPERATION;
      this.valueToOperate = DEFAULT_VALUE;
    },
    plus() { this.operation = '+' },
    minus() { this.operation = '-' },
    equals() {
      let value = Number(this.valueToOperate);

      if (this.operation === '-') value *= (-1);

      this.operation = DEFAULT_OPERATION;
      this.valueToOperate = DEFAULT_VALUE;

      this.life += value;
    }
  },
  getters: {
    displayValue: (state) => {
      let text = ''
      if (state.valueToOperate) {
        text = `${state.operation} ${state.valueToOperate}`
      }

      return `${state.life} ${text}`
    }
  }
})()