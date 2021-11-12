import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
let user = JSON.parse(localStorage.getItem('user'));
if(user) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
