import { create } from "zustand";

export const useAdminPassword = create(set => ({
    password: "",
    passwordStored: false,
    storePassword: () => set({ passwordStored: true })
}));