import React from "react";
import Header from '../src/components/Header';
import Home from './Pages/Home/Home.js';
import Products from './Pages/Products/Products.js';
import Register from './Pages/Register/Register.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;

