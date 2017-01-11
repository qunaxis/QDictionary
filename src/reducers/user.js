import {
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS
} from '../constants/user'

const initialState = {
    isLoggined: false,
    name: 'Unknown',
    token: ''
}

export default function user(state = initialState, action) {
    switch(action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                isLoggined: true
            }
        case 'SIGN_OUT':
            return { ...state, isLoggined: false }
        case SIGN_UP_FAILED:
            return state
        default:
            return state
    }
}
