import React from 'react';
import  './ShopTools.css';
import {Link} from 'react-router-dom';

export default function ShopTools() {
    return (
        <div className="container-big-tools">
            <h3>Финансовые продукты</h3>
            <div className="tools-container">
                <div><Link><img src={require('../../img/credit-card.png')} alt="Credit"/><h5>Кредитные <br/> программы</h5></Link></div>
                <div><Link><img src={require('../../img/sublease.png')} alt="Credit"/><h5>Лизинг</h5></Link></div>
                <div><Link><img src={require('../../img/car-insurance.png')} alt="Credit"/><h5>Страховнаие</h5></Link></div>
                <div><Link><img src={require('../../img/money-bag.png')} alt="Credit"/><h5>Специальные <br/> предложения</h5></Link></div>
            </div>
        </div>
    )
}
