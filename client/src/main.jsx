import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import UserState from './states/UserState.js';
import ErrorState from './states/ErrorState.js';
import SuccessState from './states/SuccessState.js';
import QuizState from './states/QuizState.js';
import ModalState from './states/ModalState.js';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const rootReducer = {
    user: persistReducer({ key: 'user', storage }, UserState),
    error: ErrorState,
    success: SuccessState,
    quiz: QuizState,
    modal: ModalState
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistStore(store)}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
