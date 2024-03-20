import { create } from "zustand";

export const useCreateMember = create(set => ({
    members: [],
    addMember: (member) => set(state => ({ ...state, members: [...state.members, { ...member, id: new Date().getTime() }] })),
    deleteMember: (id) => set(state => ({ ...state, members: state.members.filter(member => member.id !== id) })),
    updateMember: (member, id) => set(state => ({
        ...state, members: [...state.members.map(a => id === a.id ? { ...member, id } : a)]
    })),
    inputs: {
        nom: '',
        prenom: '',
        age: ''
    },
    getInputs: (key, value) => {
        set(state => ({
            ...state,
            inputs: { ...state.inputs, [key]: value }
        }))
    },
    handleEditInput: (data) => {
        set({ inputs: data })
    },
    clearInputs: () => set({
        inputs: {
            nom: '',
            prenom: '',
            age: '',
        }
    }),
    status: 'create',
    changeStatus: (status) => set({
        status
    }),
    id: '',
    changeId: (id) => set({ id }),
}));
