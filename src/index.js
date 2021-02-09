import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrap from "./components/Wrap";
import ProductPage from "./components/ProductPage";
import Homepage from './components/Homepage'
import Todolist from "./components/Todolist";
import Trello from "./components/Trello";
import LifeCycleMethods from "./components/LifeCycleMethods";
import HomeMethods from "./components/HomeMethods";
import Pdponline from "./Homework/Pdponline";

import App2 from "./App2";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lightgallery.js/dist/css/lightgallery.css";
import 'react-modal-video/css/modal-video.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";

import {rootReducer} from "./reducers/rootReducer";


const store = createStore(rootReducer);





ReactDOM.render(


    <Provider store={store}>

    <App2/>

    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
