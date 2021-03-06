import React, { Component } from 'react';
import './Leasing.css';

export class Leasing extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
      }
    render() {
        return (
            <div className="leas">
                <h4>Лизинг</h4>
                <h6>Что такое лизинг?</h6>
                <p>Лизинг – это вид инвестиционной деятельности по приобретению имущества и передаче его лизингополучателю на основании договора лизинга за определенную плату, на определенный срок и на определенных условиях, обусловленных договором, с правом выкупа имущества лизингополучателем.</p>
                <h6>Условия финансового лизинга:</h6>
                <ul>
                    <li>Авансовый платеж – 20% от стоимости предмета лизинга;</li>
                    <li>Ставка вознаграждения – от 17% годовых;</li>
                    <li>Срок лизинга – 37 месяцев;</li>
                    <li>Срок рассмотрения заявки – от 3 до 5 рабочих дней.</li>
                </ul>
                <h6>Условия оперативного лизинга:</h6>
                <ul>
                    <li>Авансовый платеж – 0%;</li>
                    <li>Ставка вознаграждения – 0%;</li>
                    <li>Срок аренды – от 12 до 60 месяцев;</li>
                    <li>Срок рассмотрения заявки – от 3 до 5 рабочих дней.</li>
                </ul>
                <h6>Контакты:</h6>
                <ul>
                    <li>Веб-сайт: <a href="http://www.mkamf.kz">http://www.mkamf.kz</a></li>
                    <li>эл.адрес: amf@astana-motors.kz</li>
                    <li>Тел: +7 (727) 333 15 96/97</li>
                </ul>
                <p>
                8 701 929 40 80  Муканов Сабит <br/>
                8 701 929 40 79 Мухамбеков  Даурен <br/>
                8 701 929 40 70 Овчаренко Николай <br/>
                8 701 098 16 08 Алтынбек Айдос <br/>
                </p>
            </div>
        )
    }
}

export default Leasing
