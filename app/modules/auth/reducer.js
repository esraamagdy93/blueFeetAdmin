import {   
    LOGIN_DATA,
    LOGIN_DATA_SUCCESS,
    LOGIN_DATA_FAILURE,
} from "./actionsTypes"
const initialState = {
    loginDataSuccess:null,
    loginDataFaulier:null

}
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_DATA:
            return { ...state };

        case LOGIN_DATA_SUCCESS:
            state.loginDataSuccess = action.data
            state.loginDataFaulier = null

            return {
                ...state
            }
        case LOGIN_DATA_FAILURE:
            state.loginDataSuccess = null
            state.loginDataFaulier = action.data

            return {
                ...state,
            }

        default:
            return state
    }
}
