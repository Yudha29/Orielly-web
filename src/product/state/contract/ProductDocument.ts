export default interface ProductDocument {
    id: string;
    name: string;
    description: string;
    photos: string[];
    merk: string;
    discount: number;
    categories: [];
    price: number;
    numOfSold: number;
}