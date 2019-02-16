import React from 'react';
import './Goods__good.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment, faCheckSquare, faSquare} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

class Goods__good extends React.Component {

    componentDidMount(){
        // if(this.props.store){
        //     this.setState({
        //         checked:this.props.store[this.props.idField-1].checked
        //     })
        // }
    }

    render() {
        let results = [];
        let data = {...this.props};
        let segment = '';
        for (let i = 0; i < this.props.priceSegment; i++) {
            segment += String.fromCharCode(8381) + ' ';
        }
        data.priceSegment = <div className='segment'>{segment}</div>;
        if (!this.props.comments) {
            data.comments = '';
        } else {
            data.comments = [<FontAwesomeIcon key='comments' icon={faComment}/>, this.props.comments]
        }



        if (this.props.checked) {
            data.checked = <FontAwesomeIcon onClick={this.props.check} icon={faCheckSquare}/>;
        } else {
            data.checked = <FontAwesomeIcon onClick={this.props.check} icon={faSquare}/>;
        }
        data.store=null;

        for (let key in data) {
            results.push(<li key={key} className={key}>{data[key]}</li>)
        }

        return (
            <ul className='Goods__good'>
                {results}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        store: state.data,
    };
}

export default connect(mapStateToProps)(Goods__good);