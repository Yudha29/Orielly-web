export default interface ProductDocument {
    id: string;
    name: string;
    description: string;
    photos: string[];
    merk: string;
    discount: number;
    categories: string[];
    price: number;
    numOfSold: number;
}