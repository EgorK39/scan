import './styles/Main/index.scss';
import './fonts/Inter/Inter-Regular.ttf';
import './fonts/Ferry/ferry_black.otf';
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';

import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";

import {BrowserRouter} from "react-router-dom";
import reducer from './redux/indexRedux';

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store);
});


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);