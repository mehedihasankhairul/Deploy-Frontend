import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductByCat from '../Pages/ProductByCat/ProductByCat';
import Category from '../Pages/Category/Category';
import EndCategories from '../Pages/EndCategories/EndCategories';
import Home from '../Pages/Home/Home';
import Product from '../Pages/Product/Product';
import { PrivateRoute } from './PrivateRoute';
import Login from '../Pages/Login';
import Shipping from '../Pages/Shipping/Shipping';
import Registration from '../Pages/Registration';
import Cart from '../Components/Cart/Cart';
import Search from '../Pages/Search/Search';

export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/checkout" component={Shipping} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute path="/cart" component={Cart} />
        <PrivateRoute path="/shipping" component={Shipping} />
        <Route path="/search/:searchquery" component={Search} />
        <Route exact path="/" component={Home} />
        <Route
          path="/:category/:mid_category/:end_category/:productid"
          component={Product}
        />
        <Route
          path="/:category/:mid_category/:end_category"
          component={ProductByCat}
        />
        <Route path="/:category/:mid_category" component={EndCategories} />
        <Route exact path="/:category" component={Category} />
      </Switch>
    </Router>
  );
}
