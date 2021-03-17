import {ThunkAction} from "../../redux/contract/ThunkAction";

export const updateQuantity = (productId: string, quantity: number) :ThunkAction =>
    (dispatch) => {
        dispatch({
            type: 'QUANTITY_UPDATED',
            payload: {productId, quantity}
        });
}