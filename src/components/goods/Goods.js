import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Goods.css';
import GoodsGood from './__good/Goods__good'
import GoodsHeader from "./__header/Goods__Header";
import {check} from "../../actions/dataActions";
import {Link} from "react-router";

class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);

    }

    check(id) {
        this.props.dispatch(check(id));
    }

    render() {

        let checked = this.props.data.filter((element) => element.checked);
        let resultType = checked.length ? 'result filled' : 'result empty';
        let unit;
        switch (checked.length) {
            case 0: {
                unit = '';
                break;
            }
            case 1: {
                unit = 'товар';
                break;
            }
            case 2:
            case 3: {
                unit = 'товара';
                break;
            }
            default:
                break;
        }

        let result = checked.length ? [<div>Вы выбрали</div>,
                <div className='number'>{checked.length}</div>,
                <div>{unit}</div>, <div className='cart'><Link to='/shopping_cart'>
                    ПЕРЕЙТИ В КОРЗИНУ
                </Link></div>]
            : <div>Пожалуйста, отметьте галочками несоклько товаров</div>;
            let goods=[];
        this.props.data.forEach((good)=>{
            goods.push(<GoodsGood
                key={good.id}
                idField={good.id}
                name={good.name}
                rating={good.rating}
                trand={good.trand}
                priceSegment={good.priceSegment}
                comments={good.comments.length}
                checked={good.checked}
                check={()=>this.check(good.id)}
            />);
        });
        return (
            <div>
                <div className="container">
                    <h1>Список товаров</h1>
                    <ul>
                        <GoodsHeader
                            idField="#"
                            name="Название"
                            rating='Рейтинг'
                            trand="Тренд"
                            priceSegment="Ценовой сегмент"
                            comments='Отзывы'
                            checked='В корзину'
                        />
                        {goods}
                    </ul>
                </div>
                <div className={resultType}>{result}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
    };
}

export default  connect(mapStateToProps)(Goods);
