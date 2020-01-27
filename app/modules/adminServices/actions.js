import {
    ADD_SERVICE ,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,
    GET_SERVICES,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILURE,
   
 } from "./actionTypes";
 
 export const addService = (object) => ({
     
     type: ADD_SERVICE,
     payload: object
 })
 
 export function addServiceDataSuccess(data) {
     return {
         type: ADD_SERVICE_SUCCESS,
         data
     }
 }
 
 export function addServiceDataFaulier(data) {
     return {
         type: ADD_SERVICE_FAILURE,
         data
     }
 }
 

 export const getServicesAction = ()=> ({
    type: GET_SERVICES,
  })
  
  export function getServicesSuccess(data) {
    return {
      type: GET_SERVICES_SUCCESS,
      data
    }
  }
  
  export function getServicesFaulier(data) {
    return {
      type: GET_SERVICES_FAILURE,
      data
  
    }
  }