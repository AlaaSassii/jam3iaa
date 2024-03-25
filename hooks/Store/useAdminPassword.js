import { create } from "zustand";

export const useAdminPassword = create(set => ({
    password: "Gr33n$un5h1ne!P@ssw0rd",
    passwordStored: false,
    storePassword: () => set({ passwordStored: true })
}));