import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => Promise<void>;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    set((state) => ({
      count: state.count + 1,
    }));
  },
}));


// BEST PRACTICES
// 1. get only a part of the state in components
// 2. group useStore custom hooks by functions