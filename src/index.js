import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
// import App from './App';
// import Hello from './Hello.js';
// import CardList from "./CardList";
import * as serviceWorker from './serviceWorker';
import App from "./App";
// import { robots } from './Robots'; // why curly brackets? 
// Because it's export(not export default). Thay can have multiple exports
// In that case {robots, cats, etc}. It's multi exports, but Robots happens
// to return only one. So in this case {robots} is enough

// get id='root', render(provide) <App /> from App.js
ReactDOM.render(
            <App />, 
            document.getElementById('root')
            );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
