import create from "zustand";

type UserState = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  isAuth: false,
  login: () => set({ isAuth: true }),
  logout: () => set({ isAuth: false }),
}));
