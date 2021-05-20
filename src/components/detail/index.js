// @vendor
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { clearDetails, getItemDetails } from '../../actions';

// @utils
import { getValue } from '../../utils';

// @styles
import './styles.scss';

// @contants
const CONDITION_MAP = {
    new: 'Nuevo',
    used: 'Usado'
};

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const itemDetails = useSelector(state => state.get('itemDetails'));
    const { item } = itemDetails.toJS();

    useEffect(() => dispatch(getItemDetails(id)), []);

    useEffect(() => {
        window.onpopstate = () => {
            dispatch(clearDetails());
        };
    }, [])

    return (
        <div className="detail">
            <div className="detail__img">
                <img src={item.picture} />
            </div>
            <div className="detail__status">
                {`${CONDITION_MAP[item.condition]} - ${item.sold_quantity} vendidos`}
            </div>
            <div className="detail__title">
                {item.title}
                <div className="detail__price">
                    {getValue(item.price)}
                </div>
            </div>
            <div className="detail__btn-section">
                <button className="detail__btn" type="submit">
                    Comprar
                </button>
            </div>
            <div className="detail__description-title">
                Descripción del producto
            </div>
            <div className="detail__description-content">
                {item.description}
            </div>
        </div>
    );
};

export default Detail;
