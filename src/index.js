import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const middleware = [thunk];
registerServiceWorker();
const store = createStore(reducer, applyMiddleware(...middleware));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
