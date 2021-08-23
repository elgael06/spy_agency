import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { setToken } from './functions/setToken';

store.subscribe(()=>{
  const data = store.getState();
  setToken(data?.login?.sesion?.token);
  localStorage.setItem('state', JSON.stringify(data));
});


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
