import { create } from "zustand";

export const useAdminPassword = create(set => ({
    password: "arij20182024",
    passwordStored: false,
    storePassword: () => set({ passwordStored: true })
}));