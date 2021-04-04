//redux
//import { combineReducers } from 'redux'; 
//import { composeWithDevTools } from 'redux-devtools-extension';
//import phonebookReducer from '../redux/phonebook/phonebook-reducers';


//const rootReducer = combineReducers({ //redux
//   phonebook: phonebookReducer //redux
//}) //redux

//const store = createStore(rootReducer, composeWithDevTools()); //redux
//export default store;

//redux/toolkit
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from '../redux/phonebook/phonebook-reducers';

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
   logger];

const phonebookPersistConfig = {
   key: 'phonebook',
   storage,
   blacklist: ['filter']
};

const store = configureStore({
   reducer: {
      phonebook: persistReducer(phonebookPersistConfig, phonebookReducer)
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };