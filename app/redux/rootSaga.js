import { all } from "redux-saga/effects"
import authSaga from '../modules/auth/saga'
import serviceSaga from '../modules/adminServices/saga'
import AdminBookingOwnerSaga from '../modules/adminHome/saga'


export default function* rootSaga(getState) {
  yield all([
    authSaga(),
    serviceSaga(),
    AdminBookingOwnerSaga()
  
  ])
}
