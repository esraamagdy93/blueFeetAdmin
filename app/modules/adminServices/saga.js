import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    ADD_SERVICE, GET_SERVICES

} from "./actionTypes"
import {
    addServiceDataSuccess,
    addServiceDataFaulier,
    getServicesSuccess,
    getServicesFaulier,

} from './actions'
import Queries from "./utils/queryHelper";
import { client } from "../../config/api";

async function addServiceCaller(serviceImage, serviseName,idOwner) {

    return await client
        .mutate({
            mutation: Queries.createService,
            variables: {
                service: {
                    name: { en: serviseName, ar: "ter" },
                    logo: serviceImage,
                    _id:idOwner
            },
            },

        })
        .then(resp =>   resp)
        .catch(error =>
            error)

}


function* addService(action) {

    try {
        const response = yield call(
            addServiceCaller,
            action.payload.serviceImage,
            action.payload.serviseName,
            action.payload.idOwner

        );
        if (response.data) {
            yield put(addServiceDataSuccess(response.data))

        }
    } catch (e) {
        console.log(e)

    }
}
const getServicesCaller = async () => {

    return await client
      .query({
        fetchPolicy: "network-only",
        query: Queries.getServices,
     
      })
      .then(resp =>
        ( resp))
      .catch(error => (
        console.log(error)
      ));
  }

function* getServices() {
    try {
      const response = yield call(
        getServicesCaller,
      );
      if (response.networkStatus == 7) {
        yield put(getServicesSuccess(response.data.get_services))
      } else {
        yield put(getServicesFaulier(response.message))
  
      }
    } catch (e) {
        console.log(e)
    }
  }

function* addServiceDataSaga() {
    yield takeEvery(ADD_SERVICE, addService)
}
export function* getServicesDataSaga() {
    yield takeEvery(GET_SERVICES, getServices)
  
  }



export default function* rootSaga() {
    yield all([
        fork(addServiceDataSaga),
        fork(getServicesDataSaga),

        

    ]);
}