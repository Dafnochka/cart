import React from "react";
import {connect} from 'react-redux';
import {getData} from '../../actions/dataActions';
import {setView} from '../../actions/viewActions';
import './Lyout.css';
import LayoutMenu from './__menu/Layout__Menu';
import LayoutMenuItem from './__menu-item/Layout__MenuItem';

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

            <LayoutMenu brand={this.brand}>
                <LayoutMenuItem href="/" active={this.isActive('/')}>
                    Главная
                </LayoutMenuItem>
                <LayoutMenuItem href="/goods" active={this.isActive('/goods')}>
                    Товары
                </LayoutMenuItem>
                <LayoutMenuItem href="/shopping_cart" active={this.isActive('/shopping_cart')}>
                    Корзина
                </LayoutMenuItem>
            </LayoutMenu>
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