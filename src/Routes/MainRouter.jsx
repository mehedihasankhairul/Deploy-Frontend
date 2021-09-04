import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProductByCat from '../Pages/ProductByCat/ProductByCat'
import Category from '../Pages/Category/Category'
import EndCategories from '../Pages/EndCategories/EndCategories'
import Error from '../Pages/Error/Error'
import Home from '../Pages/Home/Home'
import Product from '../Pages/Product/Product'
import Footer from '../Components/Shared/Footer/Footer'
import { PrivateRoute } from './PrivateRoute'

export default function MainRouter () {
  return (
        <Router>
              <Switch>
          <PrivateRoute exact path='/checkout'>
            <h2>secured route</h2>
            </PrivateRoute>
          <Route path="/login" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path='/:category/:mid_category/:end_category/:productid' component={Product} />
          <Route path='/:category/:mid_category/:end_category' component={ProductByCat} />
          <Route path='/:category/:mid_category' component={EndCategories} />
          <Route exact path='/:category' component={Category} />
        </Switch>
          <Footer />
        </Router>
  )
}
