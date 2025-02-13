import { create } from "zustand";

interface ThemeStore {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const useZustandDarkTheme = create<ThemeStore>((set) => ({
  isDarkTheme: false,
  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}));
