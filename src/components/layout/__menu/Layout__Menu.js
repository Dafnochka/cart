import React from 'react';
import {Link} from 'react-router';
import connect from "react-redux/es/connect/connect";
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">{this.props.brand}</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data.data,
        view: state.view.view,
        brand: state.view.brand,
    };
}

export default connect(mapStateToProps)(Menu);