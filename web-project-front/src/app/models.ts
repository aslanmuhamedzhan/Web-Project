export interface Product {
    id: number,
    name: string,
    price: number,
    img: string,
    category: {
        id:number,
        name:string
    }
}

export interface Category {
    id: number,
    name: string
}


export interface Order {
    firstName: string,
    secondName: string,
    address: string,
    postalCode: string
}