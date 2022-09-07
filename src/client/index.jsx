import * as React from "react";
import * as ReactDOM from "react-dom";
// import {Header} from "../shared/header";
import {App} from "../App";

window.addEventListener("load", () => {
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
})
