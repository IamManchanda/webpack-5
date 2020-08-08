import React from "react";
import { render } from "react-dom";

import Webpack from "./components/Webpack";
import "./assets/css/styles.css";

const rootElement = document.getElementById("root");
render(<Webpack />, rootElement);
