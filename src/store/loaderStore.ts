import { create } from "zustand";

type LoaderState = {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
};

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: true,
  startLoading: () => set({ isLoading: true }),
  endLoading: () => set({ isLoading: false }),
}));
