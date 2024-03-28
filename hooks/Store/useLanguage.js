import { create } from "zustand";

export const useLang = create(set => ({
    langage: null,
    setLasetLanguagegage: (langage) => set({ langage })
}))