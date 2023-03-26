import "./App.css";
import { Provider } from "react-redux";
import configureStore from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./Navigation";

function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
