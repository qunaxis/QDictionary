import {
    SOME_ERROR
} from '../constants/appState'
const initialState = {
    status: true,
    message: ''
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case SOME_ERROR:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message
            }
        default:
            return state
    }
}
