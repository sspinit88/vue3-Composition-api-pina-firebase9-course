import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  {
    state: () => ({
      count: 0,
      title: 'My Counter Title',
    }),
    actions: {
      increaseCounter(amount: number) {
        this.count += amount;
      },
      decreaseCounter(amount: number) {
        this.count -= amount;
      },
    },
  });
