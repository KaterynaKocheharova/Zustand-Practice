import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "Test task", status: "PLANNED" }],
});

export const useStore = create(store);
