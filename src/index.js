import React from "react";
import { render } from "react-dom";

const App = () => <div>Welcome to Webpack 5</div>;
const rootElement = document.getElementById("root");

render(<App />, rootElement);
