// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import BookingReducer from './booking/booking.reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  booking: BookingReducer
});

export default persistReducer(persistConfig, rootReducer);