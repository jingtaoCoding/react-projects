import React from 'react';
import './App.css';
import {store} from "./redux/store";
import { Provider } from "react-redux";
import Title from "./components/Title"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      hello
            {/* <h1> {user.name} </h1> */}
            <Title></Title>
      </Provider>
    </div>
  );
}

export default App;
