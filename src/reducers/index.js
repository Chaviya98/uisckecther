import {combineReducers} from "redux";
import {INVALIDATE_ELEMENTS, RECEIVE_ELEMENTS, REQUEST_ELEMENTS} from "../contsnts";


const initialState = {
    isLoading: false,
    error: null
}

export const elementReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ELEMENTS:
            return {
                ...state,
                isLoading: true,
            }
        case RECEIVE_ELEMENTS:
            return {
                ...state,
                isLoading: false,
                element: action.element.data
            }
        case INVALIDATE_ELEMENTS:
            return {
                ...state,
                isLoading: false,
                error: action.error

            }
        default:
            return state;
    }
}


const reducers = combineReducers({
    loginReducer: elementReducer,
});

export default reducers;
