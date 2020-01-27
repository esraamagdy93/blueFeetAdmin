import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"
import rootReducer from "./rootReducer"

const defaultState = {}
const sagaMiddleware = createSagaMiddleware()

export default store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)
