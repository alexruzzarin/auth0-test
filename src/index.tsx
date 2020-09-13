import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import * as serviceWorker from './serviceWorker';

const clientId =
  window.location.host === 'another-auth-test.ruzzar.in'
    ? '3U8ryvh5nB7CbPLKgafr6JpVFcaJOGSA'
    : 'CNA7l9PJhm7s5eIv6BdVdUxzUQpfRol8';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="ruzzarin.auth0.com"
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
