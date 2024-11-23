import { create } from "zustand";

// ======================================== COUNTER STORE

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

// ============================================== TASKS STORE

export type Status = "planned" | "ongoing" | "done";

export type TasksStore = {
  tasks: { title: string; status: Status }[];
};

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [{ title: "to do", status: "planned" }],
}));
