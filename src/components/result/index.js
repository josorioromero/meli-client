// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @utils
import { getValue } from '../../utils';

// @styles
import './styles.scss';

const Result = ({ item }) => (
    <div className="result">
        <div className="result__img">
            <img src={item.picture} />
        </div>
        <div className="result__price">
            {getValue(item.price)}
            {item.free_shipping && <img src={`${process.env.PUBLIC_URL}/shipping-icon.png`} />}
        </div>
        <div className="result__title">{item.title}</div>
        <div className="result__location">{`${item.location.city}, ${item.location.state}`}</div>
    </div>
);

Result.propTypes = {
    item: PropTypes.shape({
        free_shipping: PropTypes.bool,
        location: PropTypes.shape({
            city: PropTypes.string,
            state: PropTypes.string
        }),
        picture: PropTypes.string,
        price: PropTypes.shape({
            amount: PropTypes.number,
            currency: PropTypes.string,
            decimals: PropTypes.number
        }),
        title: PropTypes.string
    })
};

Result.defaultProps = {
    item: {
        free_shipping: false,
        location: {
            city: '',
            state: ''
        },
        picture: '',
        price: {
            amount: 0,
            currency: 'ARS',
            decimals: 0
        },
        title: ''
    }
};

export default Result;
