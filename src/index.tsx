import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const DIV = styled.div`
  body {
    margin: 0;
    padding: 0;
    box-sizzing: border-box;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <DIV>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DIV>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
