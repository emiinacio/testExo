import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import '@/lib/i18n';
import '@/styles/Light.scss';
import 'bootstrap/dist/js/bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback='loading'>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
