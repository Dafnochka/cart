import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {Router, Route, IndexRoute, browserHistory,} from 'react-router';


import Layout from '../layout/Layout';
import Main from '../main/Main';
import Goods from '../goods/Goods';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import PageNotFound from '../page-not-found/PageNotFound';

class App extends Component {
    render() {


        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={Layout}>
                        <IndexRoute component={Main}/>
                        <Route path='goods' component={Goods}/>
                        <Route path='shopping_cart' component={ShoppingCart}/>
                        <Route path="*" component={Main}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default App;
