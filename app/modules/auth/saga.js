import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    LOGIN_DATA,
  
} from "./actionsTypes"
import {
    loginDataSuccess,
    loginDataFaulier,
   
} from './actions'
import Queries from "./utils/queryHelper";
import { client } from "../../config/api";

async function loginCaller(username,password) {
    console.log("username",username,password)
    return await client
      .query({
        fetchPolicy: "network-only",
        query: Queries.login,
        variables: {
         username: username,
         password: password,
        
        },
       
      })
      .then(resp =>   resp
    )
      .catch(error => 
        console.log(error))
      
  }


function* login(action) {
    try {
        const response = yield call(
            loginCaller,
            action.payload.username,
            action.payload.password
        );
        if (response.data.login.role) {
            yield put(loginDataSuccess(response.data.login.role))

        }
    } catch (e) {
        console.log(e)

    }
}

function* loginDataSaga() {
    yield takeEvery(LOGIN_DATA, login)
}




export default function* rootSaga() {
    yield all([
        fork(loginDataSaga),
       
    ]);
}