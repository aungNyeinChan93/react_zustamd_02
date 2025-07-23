import { create } from 'zustand'
import { type User } from '../utils/data/types'
import { users } from '../utils/data/data'
// import type { produce } from 'immer';

interface UserStore {
    users: User[],
    addUser: (user: User) => void,
    removeUser: (id: number) => void,
    changeStreet: (id: number, address: string) => void,
    changeCity: (id: number, city: string) => void,
    changeCountry: (id: number, country: string) => void,
}

const useUserStore = create<UserStore>((set) => ({
    users,
    addUser: (user: User) => {
        return set(state => ({ users: [...state.users, user] }));
    },
    removeUser: (id: number) => {
        return set(state => ({ users: state.users.filter(user => user.id !== id) }))
    },
    changeStreet: (id: number, address: string) => {
        return set(state => ({
            users: state.users.map(user =>
                user.id === id
                    ? { ...user, address: { ...user.address, street: address } }
                    : user
            )
        }));
    },
    changeCity: (id: number, city: string) => {
        return set(state => ({
            users: state.users.map(user =>
                user.id == id
                    ? { ...user, address: { ...user.address, city: city } }
                    : user
            )
        }))
    },
    changeCountry: (id: number, country: string) => {
        return set(state => ({
            users: state.users.map(user =>
                user.id === id
                    ? { ...user, address: { ...user.address, country: country } }
                    : user
            )
        }));
    },

}));

export default useUserStore;