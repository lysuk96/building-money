import React from "react";
import ReactDom from "react-dom";
import App from ".//App";

//Router 세팅
import {BrowserRouter, Routes, Route} from 'react-router-dom';
ReactDom.render(
    // <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
    // </React.StrictMode>,
    document.querySelector("#root")
);
// const root = document.querySelector("#root");
// ReactDom.render(<App/>,root);