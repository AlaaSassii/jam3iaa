import { create } from "zustand";

export const useCreateMember = create((set) => ({
  members: [],
  getMembers: (members) => set({ members }),

  addMember: (member, id) =>
    set((state) => ({ ...state, members: [...state.members, { ...member, id }] })),

  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((member) => member.id !== id),
    })),
}));