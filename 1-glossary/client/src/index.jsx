import React from "react";
import { render } from "react-dom";
import App from './components/app.jsx'

render(
  <div>
    <p>Hello, World!</p>
    <App/>
  </div>,
  document.getElementById("root")
);
