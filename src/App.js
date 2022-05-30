import React from "react";
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import Main from "./container/main";
function App() {
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>
  );
}

export default App;
