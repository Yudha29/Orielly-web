export default interface QuantityInputProps {
    updateQuantity: (productId: string, quantity: number) => void;
    quantity: number;
    productId: string;
}