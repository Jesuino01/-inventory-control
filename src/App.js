import React from "react";
import Header from '../src/components/Header';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";

function isLogin() {
  return window.location.pathname === '/login' || window.location.pathname === '/'
}

function App() {
  return (
    <Router>
      <div>
        {!isLogin() && <Header />}

        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

export default App;

