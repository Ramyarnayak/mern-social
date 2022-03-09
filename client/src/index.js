import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { AuthContextProvider } from "./context/AuthContext";
import configureStore from './pages/NewsPage/store/configureStore'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
       <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
