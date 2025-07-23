import { create } from "zustand";

interface UserDataStore {
    username: string | undefined;
    email: string | undefined;
    setName: (name: string | undefined) => void;
    setEmail: (email: string | undefined) => void;
}

const useUserDataStore = create<UserDataStore>((set) => ({
    username: '',
    email: '',
    setName: (name: string | undefined) => set(() => ({ username: name })),
    setEmail: (email: string | undefined) => set(() => ({ email })),
}));


export default useUserDataStore;