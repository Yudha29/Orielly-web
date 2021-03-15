import CategoryState from "./contract/CategoryState";
import categories from '../categories.json';

const initialState: CategoryState = {
    all: categories,
}

const categoryReducer = (state = initialState) => {
    return state;
}

export default categoryReducer;