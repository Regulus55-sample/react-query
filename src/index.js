import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactQueryWrapper from "./Provider";
import { RouterProvider} from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReactQueryWrapper>
        <RouterProvider router={router} />
    </ReactQueryWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
