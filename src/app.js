import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './styles/style.scss';
import Router from "./routes/AppRouter";

import { Provider } from 'react-redux';

import configureStore from "./store/configureStore";
import {addExpense, removeExpense, editExpense} from "./actions/expenses";

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water Charge',
    title: 'Water Bill',
    amount: 2000,
    createdAt: 140
}));

store.dispatch(addExpense({
    description: 'Gas Bill',
    title: 'Gas Bill',
    amount: 1500,
    createdAt: 150
}));

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))