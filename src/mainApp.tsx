import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MainApp;
