
import { ADD_OWNER, ADD_OWNER_DATA_SUCCESS,ADD_OWNER_DATA_FAILURE, GET_OWNERS_WITH_THEM_COURTS, GET_OWNERS_WITH_THEM_COURTS_DATA_SUCCESS, GET_OWNERS_WITH_THEM_COURTS_DATA_FAILURE, ADD_COURT, ADD_COURT_DATA_SUCCESS, ADD_COURT_DATA_FAILURE, EDIT_OWNER_DATA_SUCCESS, EDIT_OWNER_DATA_FAILURE ,EDIT_OWNER} from "./actionTypes";
 
 export const addOwnerData = (object) => ({
     type: ADD_OWNER,
     payload: object
 })
 
 export function addOwnerDataSuccess(data) {
     return {
         type: ADD_OWNER_DATA_SUCCESS,
         data
     }
 }
 
 export function addOwnerDataFaulier(data) {
     return {
         type: ADD_OWNER_DATA_FAILURE,
         data
     }
 }
 
 export const getOwnersWithThemCourtsData = (object) => ({
    type: GET_OWNERS_WITH_THEM_COURTS,
    payload: object
})

export function getOwnersWithThemCourtsDataSuccess(data) {
    return {
        type: GET_OWNERS_WITH_THEM_COURTS_DATA_SUCCESS,
        data
    }
}

export function getOwnersWithThemCourtsDataFaulier(data) {
    return {
        type: GET_OWNERS_WITH_THEM_COURTS_DATA_FAILURE,
        data
    }
}
export const addCourtData = (object) => (
    console.log( "object",object),{
    type: ADD_COURT,
    payload: object
})

export function addCourtDataSuccess(data) {
    return {
        type: ADD_COURT_DATA_SUCCESS,
        data
    }
}

export function addCourtDataFaulier(data) {
    return {
        type: ADD_COURT_DATA_FAILURE,
        data
    }
}

 
export const editOwnerData = (object) => ({
    type: EDIT_OWNER,
    payload: object
})

export function editOwnerDataSuccess(data) {
    return {
        type: EDIT_OWNER_DATA_SUCCESS,
        data
    }
}

export function editOwnerDataFaulier(data) {
    return {
        type: EDIT_OWNER_DATA_FAILURE,
        data
    }
}