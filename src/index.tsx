import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './global-styles';
import { FontStyle } from './fonts/fonts';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
if (process.env.NODE_ENV !== 'development') {
    console.log = () => {};
    console.debug = () => {};
    console.info = () => {};
    console.warn = () => {};
}
root.render(
    <React.StrictMode>
        <FontStyle />
        <GlobalStyles />
        <App />
    </React.StrictMode>,
);

reportWebVitals();
