import {
    ADD_SERVICE,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,
    GET_SERVICES,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILURE,
} from "./actionTypes"
const initialState = {
    addServiceDataSuccess: null,
    addServiceDataFaulier: null,
    getServiceDataSuccess:null,
    getServiceDataFaulier:null

}
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            return { ...state };

        case ADD_SERVICE_SUCCESS:
            state.addServiceDataSuccess = action.data
            state.addServiceDataFaulier = null

            return {
                ...state
            }
        case ADD_SERVICE_FAILURE:
            state.addServiceDataSuccess = null
            state.addServiceDataFaulier = action.data

            return {
                ...state,
            }

            case GET_SERVICES:
            return { ...state };

        case GET_SERVICES_SUCCESS:
            state.getServiceDataSuccess = action.data
            state.getServiceDataFaulier = null

            return {
                ...state
            }
        case GET_SERVICES_FAILURE:
            state.getServiceDataSuccess = null
            state.getServiceDataFaulier = action.data

            return {
                ...state,
            }

        default:
            return state
    }
}
