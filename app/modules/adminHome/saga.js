import { all, call, fork, takeEvery, put } from "redux-saga/effects"
import {
    addOwnerDataSuccess, getOwnersWithThemCourtsDataSuccess,addCourtDataSuccess

} from './actions'
import Queries from "./utils/queryHelper";
import { client } from "../../config/api";
import { ADD_OWNER, GET_OWNERS_WITH_THEM_COURTS, ADD_COURT, EDIT_OWNER } from "./actionTypes";
import { isEnumType } from "../../../node_modules/graphql";


async function addOwnerCaller(username, password, first, last, fees, phone) {
    
    console.log("username", username, password, first, last, fees, phone)
    return await client
        .mutate({
            mutation: Queries.createOwner,
            variables: {
                owner: {
                    name: { first: first, last: last },
                    username: username,
                    password: password,
                    fees: parseFloat(fees),
                    phone: phone
                },
            },

        })
        .then(resp => resp
        )
        .catch(error =>
            console.log(error))

}
async function addCourtCaller(enName,arName,lag,lat,address,slotsType,Times,price,Photo,idOwner) {

    console.log("username",enName,arName,lag,lat,address,slotsType,Times,price,Photo,idOwner)
    return await client
        .mutate({
            mutation: Queries.createCourt,
            variables: {
                court: {
                    name: { en:enName, ar:arName },
                    location: { lng:parseFloat(lag), lat: parseFloat(lat) },
                    address: address,
                    slotsType:slotsType,
                    available:Times,
                    price:price,
                    images:Photo,
                    user:idOwner

                }
            
            },

        })
        .then(resp =>resp
        )
        .catch(error =>
            console.log(error))

}
async function getOwnersWithThemCourtsCaller() {
    return await client
        .query({
            fetchPolicy: "network-only",
            query: Queries.getOwnersWithThemCourts,


        })
        .then(resp => resp
        )
        .catch(error =>
            console.log(error))

}

async function editOwnerCaller(username, password, first, last, fees, phone,_id) {
    
    console.log("username", username, password, first, last, fees, phone,_id)
    return await client
        .mutate({
            mutation: Queries.editOwner,
            variables: {
                owner: {
                    name: { first: first, last: last },
                    username: username,
                    password: password,
                    fees: parseFloat(fees),
                    phone: phone,
                    _id:_id
                },
            },

        })
        .then(resp => consol.log(resp)
        )
        .catch(error =>
            console.log(error))

}

function* addOwner(action) {
    try {
        const response = yield call(
            addOwnerCaller,
            action.payload.username,
            action.payload.password,
            action.payload.first,
            action.payload.last,
            action.payload.fees,
            action.payload.phone,




        );
        if (response.data.create_owner.role) {
            yield put(addOwnerDataSuccess(response.data.create_owner.role))

        }
    } catch (e) {
        console.log(e)

    }
}
function* getOwnersWithThemCourts() {
    try {
        const response = yield call(
            getOwnersWithThemCourtsCaller);
        if (response.data.get_owners) {
            yield put(getOwnersWithThemCourtsDataSuccess(response.data.get_owners))

        }
    } catch (e) {
        console.log(e)

    }
}

function* addCourt(action) {
    console.log("action.payload.idOwner,", action.payload.idOwner,
    )
    try {
        const response = yield call(
            addCourtCaller,
            action.payload.enName,
            action.payload.arName,
            action.payload.lag,
            action.payload.lat,
            action.payload.address,
            action.payload.slotsType,
            action.payload.Times,
            action.payload.price,
            action.payload.Photo,
            action.payload.idOwner,

            
        );
        if (response.data) {
            yield put(addCourtDataSuccess(response.data.create_court._id))

        }
    } catch (e) {
        console.log(e)

    }
}

function* editOwner(action) {
    try {
        const response = yield call(
            editOwnerCaller,
            action.payload.username,
            action.payload.password,
            action.payload.first,
            action.payload.last,
            action.payload.fees,
            action.payload.phone,
            action.payload._id




        );
        if (response.data.create_owner.role) {
            yield put(edOwnerDataSuccess(response.data.create_owner.role))

        }
    } catch (e) {
        console.log(e)

    }
}
function* addOwnerDataSaga() {
    yield takeEvery(ADD_OWNER, addOwner)
}
function* getOwnersWithThemCourtsDataSaga() {
    yield takeEvery(GET_OWNERS_WITH_THEM_COURTS, getOwnersWithThemCourts)
}
function* addCourtDataSaga() {
    yield takeEvery(ADD_COURT, addCourt)
}
function* editOwnerDataSaga() {
    yield takeEvery(EDIT_OWNER, editOwner)
}



export default function* rootSaga() {
    yield all([
        fork(addOwnerDataSaga),
        fork(getOwnersWithThemCourtsDataSaga),
        fork(addCourtDataSaga),
        fork(editOwnerDataSaga),

        


    ]);
}