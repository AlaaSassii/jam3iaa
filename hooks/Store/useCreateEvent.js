import { create } from "zustand";

export const useCreateEvent = create(set => ({
    modalOpen: false,
    openModal: () => set({ modalOpen: true }),
    closeModal: () => set({ modalOpen: false }),
    events: [],
    getEvent: (events) => set({ events }),
    addEvents: (event, id) => set(state => ({ ...state, events: [...state.events, { ...event, id }] })),
    deleteEvent: (id) => set(state => ({ ...state, events: state.events.filter(event => event.id !== id) })),
    updateEvent: (event, id) => set(state => ({
        ...state, events: [...state.events.map(e => id === e.id ? { ...event, id } : e)]
    })),
    inputs: {
        name: '',
        description: '',
        image: '',
        date: '',
        address: '', // Added address field
        time: ''     // Added time field
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
            date: '',
            address: '', // Added address field
            time: ''     // Added time field
        }
    }),
    status: 'create',
    changeStatus: (status) => set({
        status
    }),
    id: '',
    changeId: (id) => set({ id }),
}))
