import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/">React Shopping Cart</Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Routes>
                <Route path="/admin" element={<AdminScreen/>}></Route>
                <Route path="/" element={<HomeScreen/>}></Route>
              </Routes>
            </main>
            <footer>
              All right is reserved.
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
