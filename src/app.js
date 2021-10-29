import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './styles/style.scss';
import Router from "./routes/AppRouter";
import './firebase/firebase';

import { Provider } from 'react-redux';

import configureStore from "./store/configureStore";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))