import {   
    ADD_OWNER,
    ADD_OWNER_DATA_SUCCESS,
    ADD_OWNER_DATA_FAILURE,
    GET_OWNERS_WITH_THEM_COURTS,
    GET_OWNERS_WITH_THEM_COURTS_DATA_SUCCESS,
    GET_OWNERS_WITH_THEM_COURTS_DATA_FAILURE,
    ADD_COURT,
    ADD_COURT_DATA_SUCCESS,
    ADD_COURT_DATA_FAILURE,
    EDIT_OWNER,
    EDIT_OWNER_DATA_SUCCESS,
    EDIT_OWNER_DATA_FAILURE
} from "./actionTypes"
const initialState = {
    addOwnerDataSuccess:null,
    addOwnerDataFaulier:null,
    getOwnersWithThemCourtsDataSuccess:null,
    getOwnersWithThemCourtsDataFaulier:null,
    addCourtDataSuccess:null,
    addCourtDataFaulier:null,
    editOwnerDataSuccess:null,
    editOwnerDataFaulier:null,


}
export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_OWNER:
            return { ...state };

        case ADD_OWNER_DATA_SUCCESS:
            state.addOwnerDataSuccess = action.data
            state.addOwnerDataFaulier = null

            return {
                ...state
            }
        case ADD_OWNER_DATA_FAILURE:
            state.addOwnerDataSuccess = null
            state.addOwnerDataFaulier = action.data

            return {
                ...state,
            }
            case GET_OWNERS_WITH_THEM_COURTS:
            return { ...state };

        case GET_OWNERS_WITH_THEM_COURTS_DATA_SUCCESS:
            state.getOwnersWithThemCourtsDataSuccess = action.data
            state.getOwnersWithThemCourtsDataFaulier = null

            return {
                ...state
            }
        case GET_OWNERS_WITH_THEM_COURTS_DATA_FAILURE:
            state.getOwnersWithThemCourtsDataSuccess = null
            state.getOwnersWithThemCourtsDataFaulier = action.data

            return {
                ...state,
            }
            case ADD_COURT:
            return { ...state };

        case ADD_COURT_DATA_SUCCESS:
            state.addCourtDataSuccess = action.data
            state.addCourtDataFaulier = null

            return {
                ...state
            }
        case ADD_COURT_DATA_FAILURE:
            state.addCourtDataSuccess = null
            state.addCourtDataFaulier = action.data

            return {
                ...state,
            }
            case EDIT_OWNER:
            return { ...state };

        case EDIT_OWNER_DATA_SUCCESS:
            state.editOwnerDataSuccess = action.data
            state.editOwnerDataFaulier = null

            return {
                ...state
            }
        case EDIT_OWNER_DATA_FAILURE:
            state.editOwnerDataSuccess = null
            state.editOwnerDataFaulier = action.data

            return {
                ...state,
            }

        default:
            return state
    }
}
