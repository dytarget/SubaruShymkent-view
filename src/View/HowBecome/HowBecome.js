import React, { Component } from 'react';
import './HowBecome.css';

export class HowBecome extends Component {
    componentWillMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <div className="cont">
                <h4>Как стать дилером Subaru</h4>
                <div style={{textAlign:"center"}}>
                    <img style={{textAlign:"center"}}  width="40%" src={require('./subaru-logo.jpg')} alt=""/>
                </div>
                <p>ТОО «SUBARU KAZAKHSTAN» официальный Дистрибьютор марки SUBARU в Казахстане, предлагает рассмотреть возможность сотрудничества с нами в сфере продвижения автомобилей марки SUBARU на казахстанском рынке.</p>
                <p>Чтобы стать дилером, необходимо учитывать следующие критерии:</p>
                <ul>
                    <li>Опыт работы в автомобильном бизнесе;</li>
                    <li>Стабильное финансовое положение;</li>
                    <li>Наличие центра, включающего в себя торговый зал, клиентскую и сервисную зону;</li>
                    <li>Профессиональный коллектив.</li>
                </ul>
                <p>Если Вы хотите стать Дилером SUBARU, отправьте Вашу заявку на e-mail <a href="" style={{color:"##099ff"}}>office@subaru.kz</a></p>
                <p>Мы внимательно рассмотрим каждое обращение.</p>
            </div>
        )
    }
}

export default HowBecome;
