import { create } from "zustand";

export const useCreateActivity = create(set => ({
    modalOpen: false,
    openModal: () => set({ modalOpen: true }),
    closeModal: () => set({ modalOpen: false }),
    activities: [],
    addActivity: (activity) => set(state => ({ ...state, activities: [...state.activities, { ...activity, id: new Date().getTime() }] })),
    deleteActivity: (id) => set(state => ({ ...state, activities: state.activities.filter(activity => activity.id !== id) })),
    updateActivity: (activity, id) => set(state => ({
        ...state, activities: [...state.activities.map(a => id === a.id ? { ...activity, id } : a)]
    })),
    inputs: {
        name: '',
        description: '',
        image: '',
        date: ''
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
            name: '',
            description: '',
            image: '',
            date: ''
        }
    }),
    status: 'create',
    changeStatus: (status) => set({
        status
    }),
    id: '',
    changeId: (id) => set({ id }),
}));
