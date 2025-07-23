export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
};


export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

export interface Order {
    id: number;
    productName: string;
    total: number;
}

export interface Address {
    street: string;
    city: string;
    country: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    orders: Order[];
}
