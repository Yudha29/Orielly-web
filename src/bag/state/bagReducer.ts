import BagState from "./contract/BagState";
import bag from '../bag.json';

const initialState: BagState = {
    items: bag,
}

const bagReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'QUANTITY_UPDATED': {
            if (action.payload.quantity === 0)
                return {items: state.items.filter(e => e.productId !== action.payload?.productId)}
            return {
                items: state.items.map(e => {
                    const item = {...e};
                    if (item.productId === action.payload?.productId)
                        item.quantity = action.payload.quantity;
                    return item;
                })
            }
        }

        default:
            return state;
    }
}

export default bagReducer;