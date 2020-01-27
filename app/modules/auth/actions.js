import {
   LOGIN_DATA,
   LOGIN_DATA_SUCCESS,
   LOGIN_DATA_FAILURE,
  
} from "./actionsTypes";

export const loginData = (object) => ({
    type: LOGIN_DATA,
    payload: object
})

export function loginDataSuccess(data) {
    return {
        type: LOGIN_DATA_SUCCESS,
        data
    }
}

export function loginDataFaulier(data) {
    return {
        type: LOGIN_DATA_FAILURE,
        data
    }
}
