import React from "react";
import Header from './components/Header';
import Login from './Pages/Login'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Register from './Pages/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function App() {
  const isLogin = window.location.pathname === '/login' || window.location.pathname === '/';
  return (
    <Router>
      <div>
        {!isLogin && <Header />}

        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </div>
    </Router>
  );
}

