import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(reducers, composeWithDevTools());

export const DataProvider = ( {children} ) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}