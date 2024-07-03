import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(
  //once DOM is rendered we are quereing this root data struct 
  document.getElementById("root") as HTMLElement 
);
root.render( // rednering following content
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
reportWebVitals();
