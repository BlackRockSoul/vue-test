import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter2', {
  state: (): { count: number } => ({ count: 0 }),
  getters: {
    doubleCount: (state): number => state.count * 2
  },
  actions: {
    increment(): void {
      this.count++;
    }
  }
});
