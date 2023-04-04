import { BUY_CAKE } from "./cakeTypes";

const initialState = {
    numOfcakes: 10,
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, numOfcakes: state.numOfcakes - action.payload
        }
        default: return state
    }
};

export default cakeReducer;