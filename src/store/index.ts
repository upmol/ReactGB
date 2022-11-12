import { compose, createStore } from 'redux';
import { profileReducer } from './profile/reducer';

export const composeEnchancer =
//@ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(profileReducer, composeEnchancer);