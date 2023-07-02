import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartCountReducer from './CartCount';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    cartitem: cartCountReducer,
  },
  middleware: [thunk]
});
