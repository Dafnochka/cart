import React from 'react';
import './Goods__Header.css'

export default class Goods__Header extends React.Component {
    render() {
        let result = [];
        for (let key in this.props) {
            result.push(<li  key={key} className={key}>{this.props[key]}</li>)
        }

        return (
            <ul className='Goods__Header'>
                {result}
            </ul>
        );
    }
}