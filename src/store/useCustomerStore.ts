import { create } from "zustand";
import { customers } from "../utils/data";


interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

interface CustomerStore {
    customers: Customer[],
    addCustomer: (newCustomer: Customer) => void,
    removeCustomer: (id: number) => void
}

const useCustomerStore = create<CustomerStore>((set) => ({
    customers,
    addCustomer: (newCustomer: Customer) => set(state => ({ customers: [...state.customers, newCustomer] })),
    removeCustomer: (id: number) => set(state => ({ customers: state.customers.filter(c => c.id !== id) }))
}));

export default useCustomerStore