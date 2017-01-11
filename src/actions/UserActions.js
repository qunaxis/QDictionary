import axios from 'axios'

import {
    //SIGN_UP_TRY,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
} from '../constants/user'
import {
    SOME_ERROR
} from '../constants/appState'

export function signUp(user) {
    return (dispatch) => {
        axios.post('http://192.168.0.11/api/v1/signup', {user})
            .then(res => {
                if(res.status) {
                    console.log(res.data.user.name)
                    dispatch({
                        type: SIGN_UP_SUCCESS,
                        payload: res.data.user
                    })
                } else {
                    dispatch({
                        type: SIGN_UP_FAILED
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: SOME_ERROR,
                    payload: err
                })
            })
    }
}

export function signOut() {
    return {
        type: 'SIGN_OUT'
    }
}
