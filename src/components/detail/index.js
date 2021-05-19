// @vendor
import React from 'react';
import { useParams } from 'react-router-dom';

// @styles
import './styles.scss';

const Detail = () => {
    const { id } = useParams();

    return (
        <div className="detail">
            <div className="detail__img">
                <img src={process.env.PUBLIC_URL + '/logo-meli.png'} />
            </div>
            <div className="detail__status">
                Nuevo - 234 vendidos
            </div>
            <div className="detail__title">
                Deco reverse sombrero oxford
                <div className="detail__price">
                    $ 1.980
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
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
                Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
            </div>
        </div>
    );
};

export default Detail;
