import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-7EwRY1TiL3aCIOGGySUmtawoVuzxuLE",
  authDomain: "swatchdeck-19d02.firebaseapp.com",
  projectId: "swatchdeck-19d02",
  storageBucket: "swatchdeck-19d02.appspot.com",
  messagingSenderId: "148907254792",
  appId: "1:148907254792:web:f63e27505717fdf17f1dbd",
  measurementId: "G-GTYZKZVE5J"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
