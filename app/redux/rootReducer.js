import authReducer from '../modules/auth/reducer';
import ServicesReducer from '../modules/adminServices/reducer';
import AdminBookingOwnerReducer from '../modules/adminHome/reducer';

import { combineReducers } from 'redux';

export default rootReducer = combineReducers({
  authReducer,
  ServicesReducer,
  AdminBookingOwnerReducer
})