import React from "react";
import Header from '../src/components/Header';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
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

