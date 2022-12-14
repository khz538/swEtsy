import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ModalProvider } from "./context/Modal";
import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();


function Root() {
  return (
      <Provider store={store}>
          <ModalProvider>
            <App />
          </ModalProvider>
      </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
