import React from "react";
import {connect} from 'react-redux';
import {getData} from '../../actions/dataActions';
import {setView} from '../../actions/viewActions';
import './Lyout.css';
import Layout__Menu from './__menu/Layout__Menu';
import Layout__MenuItem from './__menu-item/Layout__MenuItem';

class Layout extends React.Component {


    getData() {
        this.props.dispatch(getData());
    }

    setView(type) {
        this.props.dispatch(setView(type));
    }
    isActive(href){
        return window.location.pathname === href;
    }

    render() {


        return <div>

            <Layout__Menu brand={this.brand}>
                <Layout__MenuItem href="/" active={this.isActive('/')}>
                    Главная
                </Layout__MenuItem>
                <Layout__MenuItem href="/goods" active={this.isActive('/goods')}>
                    Товары
                </Layout__MenuItem>
                <Layout__MenuItem href="/shopping_cart" active={this.isActive('/shopping_cart')}>
                    Корзина
                </Layout__MenuItem>
            </Layout__Menu>
                        {this.props.children}

            <footer className="card-footer">
                &copy; Гукетлева Дарья 2019г.
            </footer>
        </div>

    }

    componentDidMount() {
        // this.props.dispatch(fetchUser())
        this.getData();
        this.setState({
            chartType: this.props.chartType
        })

    }
}

function mapStateToProps(state) {
    return {
        data: state.data.data,
        view: state.view.view,
        chartType: state.view.chartType,
    };
}

export default connect(mapStateToProps)(Layout);