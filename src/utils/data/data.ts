const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 15.99,
        category: "Electronics",
        inStock: true
    },
    {
        id: 2,
        name: "Bluetooth Speaker",
        price: 45.5,
        category: "Electronics",
        inStock: true
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 60.0,
        category: "Footwear",
        inStock: false
    },
    {
        id: 4,
        name: "Water Bottle",
        price: 10.25,
        category: "Accessories",
        inStock: true
    },
    {
        id: 5,
        name: "Gaming Keyboard",
        price: 75.0,
        category: "Electronics",
        inStock: false
    },
    {
        id: 6,
        name: "Notebook",
        price: 2.5,
        category: "Stationery",
        inStock: true
    },
    {
        id: 7,
        name: "Backpack",
        price: 28.0,
        category: "Bags",
        inStock: true
    },
    {
        id: 8,
        name: "LED Monitor",
        price: 120.99,
        category: "Electronics",
        inStock: true
    },
    {
        id: 9,
        name: "Smartphone",
        price: 299.99,
        category: "Electronics",
        inStock: false
    },
    {
        id: 10,
        name: "Office Chair",
        price: 89.0,
        category: "Furniture",
        inStock: true
    }
];

const customers = [
    {
        id: 1,
        name: "Aung Nyein Chan",
        email: "aung.chan@example.com",
        phone: "09123456789",
        address: "Yangon, Myanmar"
    },
    {
        id: 2,
        name: "Su Su Hlaing",
        email: "susu.hlaing@example.com",
        phone: "09234567891",
        address: "Mandalay, Myanmar"
    },
    {
        id: 3,
        name: "Kyaw Min Oo",
        email: "kyaw.min@example.com",
        phone: "09345678912",
        address: "Naypyidaw, Myanmar"
    },
    {
        id: 4,
        name: "Hnin Ei Mon",
        email: "hnin.mon@example.com",
        phone: "09456789123",
        address: "Bago, Myanmar"
    },
    {
        id: 5,
        name: "Zaw Zaw",
        email: "zaw.zaw@example.com",
        phone: "09567891234",
        address: "Taunggyi, Myanmar"
    },
    {
        id: 6,
        name: "Thandar Htay",
        email: "thandar.htay@example.com",
        phone: "09678912345",
        address: "Pathein, Myanmar"
    },
    {
        id: 7,
        name: "Nay Lin Tun",
        email: "nay.lin@example.com",
        phone: "09789123456",
        address: "Monywa, Myanmar"
    },
    {
        id: 8,
        name: "Ei Phyu Phyu",
        email: "ei.phyu@example.com",
        phone: "09891234567",
        address: "Mawlamyine, Myanmar"
    },
    {
        id: 9,
        name: "Tun Tun",
        email: "tun.tun@example.com",
        phone: "09912345678",
        address: "Pyay, Myanmar"
    },
    {
        id: 10,
        name: "Cherry Moe",
        email: "cherry.moe@example.com",
        phone: "09123456700",
        address: "Magway, Myanmar"
    }
];

const users = [
    {
        id: 1,
        name: "Aung Nyein Chan",
        email: "aung@example.com",
        address: {
            street: "123 Main St",
            city: "Yangon",
            country: "Myanmar"
        },
        orders: [
            { id: 101, productName: "Wireless Mouse", total: 15.99 },
            { id: 102, productName: "Notebook", total: 2.5 }
        ]
    },
    {
        id: 2,
        name: "Su Su Hlaing",
        email: "susu@example.com",
        address: {
            street: "456 Lake Rd",
            city: "Mandalay",
            country: "Myanmar"
        },
        orders: [
            { id: 103, productName: "Backpack", total: 28.0 }
        ]
    },
    {
        id: 3,
        name: "Kyaw Min Oo",
        email: "kyaw@example.com",
        address: {
            street: "789 Forest Ln",
            city: "Naypyidaw",
            country: "Myanmar"
        },
        orders: []
    }
];

const tasks = [
    { "id": 1, "task": "Schedule Q3 budget review meeting", "completed": false },
    { "id": 2, "task": "Send follow-up email to marketing team regarding campaign launch", "completed": true },
    { "id": 3, "task": "Research and compare new project management software options", "completed": false },
    { "id": 4, "task": "Prepare presentation for Monday's client meeting", "completed": false },
    { "id": 5, "task": "Review and approve pending invoices", "completed": true },
    { "id": 6, "task": "Update employee handbook with new remote work policy", "completed": false },
    { "id": 7, "task": "Order new office supplies", "completed": true },
    { "id": 8, "task": "Draft agenda for weekly team sync", "completed": false },
    { "id": 9, "task": "Submit expense reports for last business trip", "completed": true },
    { "id": 10, "task": "Organize digital files on shared drive", "completed": false }
]

export { products, customers, users, tasks }