import { create } from "zustand";

type State = {
  isAuth: boolean;
};

type Action = {
  login: () => void;
  logout: () => void;
  logAuth: () => void;
};

// type UserState = {
//   isAuth: boolean;
//   login: () => void;
//   logout: () => void;
// };

// export const useUserStore = create<UserState>((set) => ({
export const useUserStore = create<State & Action>((set, get) => ({
  isAuth: false,
  login: () => set({ isAuth: true }),
  logout: () => set({ isAuth: false }),
  logAuth: () => {
    console.log(`isAuth in store: ${get().isAuth}`);
  },
}));
