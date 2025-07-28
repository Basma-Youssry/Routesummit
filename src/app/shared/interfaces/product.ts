export interface Product {
    title: string;
    category: string;
    description: string;
    id: string;
    image: string;
    price: number;
    rating: {
        count: number;
        rate: number;
    }
}    
