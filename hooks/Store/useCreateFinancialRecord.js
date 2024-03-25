import { create } from "zustand";

export const useCreateFinancialRecord = create((set) => ({
    modalOpen: false,
    openModal: () => set({ modalOpen: true }),
    closeModal: () => set({ modalOpen: false }),
    financialRecords: [],
    getFinancialRecord: (records) => set({ financialRecords: records }),
    addFinancialRecord: (record, id) =>
        set((state) => ({ ...state, financialRecords: [...state.financialRecords, { ...record, id }] })),
    deleteFinancialRecord: (id) =>
        set((state) => ({ ...state, financialRecords: state.financialRecords.filter(record => record.id !== id) })),
    updateFinancialRecord: (record, id) =>
        set((state) => ({
            ...state,
            financialRecords: [...state.financialRecords.map(e => id === e.id ? { ...record, id } : e)]
        })),
    financialInputs: {
        type: '',
        amount: '',
        date: ''
    },
    getFinancialInputs: (key, value) => {
        set((state) => ({
            ...state,
            financialInputs: { ...state.financialInputs, [key]: value }
        }))
    },
    clearFinancialInputs: () =>
        set({
            financialInputs: {
                type: '',
                amount: '',
                date: ''
            }
        }),
    status: 'create',
    changeStatus: (status) => set({ status }),
    id: '',
    changeId: (id) => set({ id }),
}));
