import React, { Component } from 'react';
import {MDBBtnGroup,MDBBtn,MDBInput} from 'mdbreact';
import './ServiceCompany.css';
import {Table,Button,Modal,Form} from 'react-bootstrap';
import axios from 'axios';


const url="http://78.40.109.172:5000/";
export class ServiceCompany extends Component {
    state={
        showNapisat:false,
        showVin:false,
        namevin:"",
        emailvin:"",
        phonevin:"",
        vin:"",
        name:"",
        phone:"",
        email:"",
        message:""
    }
    handleClose=()=>{
        this.setState({showNapisat:false});
    }
     
    handleOpen=()=>{
        this.setState({showNapisat:true});
    }
    handleCloseVin=()=>{
        this.setState({showVin:false});
    }
     
    handleOpenVin=()=>{
        this.setState({showVin:true});
    }
   
    render() {
        return (
            <div className="service_comp">
                <div>
                <h5>Сервисные кампании</h5>
                <img style={{width:"90%"}} src={require('../Cars/images/servicecomp.jpg')} alt="Сервисная компания"/>
                <MDBBtnGroup>
                    <MDBBtn onClick={this.handleOpen} color="info">Задать вопрос</MDBBtn>
                    <MDBBtn onClick={this.handleOpenVin} color="elegant">Проверьте свой Subaru</MDBBtn>
                </MDBBtnGroup>
                <p>Сервисные кампании</p>
                </div>

                <Table className="tabl" hover size="sm" style={{width:"85%"}} bordered>
                    <thead>
                        <tr>
                            <th>Сервисная кампания</th>
                            <th>Модель</th>
                            <th>Модельный год</th>
                            <th>Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SRT270 датчик стоп-сигнала</td>
                            <td></td>
                            <td></td>
                            <td>	
Причиной объявления данной кампании послужило возможное пропадание контакта в концевом выключателе стоп-сигналов. Это может привести к не включению стоп-сигналов при нажатии на педаль тормоза.</td>
                        </tr>
                        <tr>
                            <td>Замена реле на модифицированные</td>
                            <td>Legacy/Outback</td>
                            <td>2015-2016</td>
                            <td>	
                                	
Причиной объявления данной кампании послужило обнаружение возможности образования льда на контактах реле при низкой температуре окружающего воздуха. Лёд может препятствовать правильному контакту реле. Данное явление может привести к невозможности запустить ДВС при низкой температуре окружающего воздуха.
Производитель разработал модифицированные реле. Для проверки того, попадает ли Ваш автомобиль под действие данной кампании.
                            </td>
                        </tr>
                        <tr>
                            <td>Перепрограммирование блока EPB</td>
                            <td>Legacy/Outback</td>
                            <td>2015</td>
                            <td>	Причиной сервисной кампании послужило программное обеспечение блока управления системы электронного стояночного тормоза. Текущий алгоритм работы системы может привести, при определенных условиях, к невозможности снять автомобиль с электронного стояночного тормоза.
Для проверки того, попадает ли Ваш автомобиль под действие данной кампании, обратитесь к любому официальному дилеру SUBARU или в службу поддержки клиентов.
                                </td>
                        </tr>
                        <tr>
                            <td>Замена контактов в реле электродвигателя стеклоочистителя</td>
                            <td>Legacy/Outback</td>
                            <td>2011-2014</td>
                            <td>	Причиной объявления данной кампании послужило обнаружение возможности появления неправильного контакта в реле электродвигателя стеклоочистителя, связанного с попаданием посторонних частиц. В худшем случае, данное явление может привести к оплавлению крышки электродвигателя стеклоочистителя.
Производитель разработал модифицированные крышки электродвигателя стеклоочистителя с реле для решения данной проблемы.
                                </td>
                        </tr>
                        <tr>
                            <td>Сервисная кампания по подушкам безопасности TAKATA для переднего пассажира</td>
                            <td>Legacy/Outback
Forester
Impreza/Impreza WRX
Tribeca</td>
                            <td>2004-2009
2009-2010
2004-2010
2006-2011</td>
                            <td>
                            По данным производителя под условия кампании попадают некоторые автомобили, реализованные через официальные дилерские центры SUBARU в Республике Казахстан.
Причиной сервисной кампании послужило маловероятное, однако, возможное проникновение влаги в газогенератор подушки безопасности спустя длительное время эксплуатации автомобиля. Это может привести к повреждению газогенератора и, при срабатывании фронтальной подушки безопасности переднего пассажира, вызвать риск получения повреждений.
                                </td>
                        </tr>
                        <tr>
                            <td>Неправильное срабатывание замка капота</td>
                            <td>Tribeca</td>
                            <td>2006-2014</td>
                            <td>Причиной объявления данной кампании служит маловероятное, однако, возможное неправильное срабатывание замка капота, в результате закисания его элементов. В худшем случае это может привести к открытию капота во время движения автомобиля.
Чтобы исключить неправильное срабатывание замка капота, просим владельцев указанных автомобилей связаться с любым удобным официальным дилером.
                                </td>	
                        </tr>
                        <tr>
                            <td>Замена крышки электродвигателя стеклоочистителя</td>
                            <td>Legacy/Outback</td>
                            <td>2010-2011</td>
                            <td>	
Владельцам автомобилей SUBARU Legacy/Outback 10-11МГ, произведенных в период с 04.11.2009 по 17.05.2011 необходимо связаться с ближайшим официальным дилером SUBARU и сообщить VIN-код своего автомобиля. После чего дилер проверит, подпадает ли Ваш автомобиль под данную кампанию и при необходимости пригласит Вас для бесплатной замена крышки электродвигателя стеклоочистителя ветрового стекла на модифицированную (с увеличенным зазором) с целью обеспечения более устойчивой работы электродвигателя.
                                </td>	
                        </tr>
                        <tr>
                            <td>Сервисная кампания на автомобилях SUBARU Forester 2013-2014 МГ с турбированным двигателем объемом  2,0 л DIT</td>
                            <td>Forester</td>
                            <td>2013-2014</td>
                            <td>	Вниманию владельцев автомобилей SUBARU моделей Forester 2013-2014 модельных годов с турбированным двигателем рабочим объемом 2,0 л. DIT. Информируем Вас о том, что в рамках постоянной деятельности по улучшению качества продукции Производителем автомобилей SUBARU было установлено, что в момент первоначального запуска холодного двигателя, есть вероятность возникновения неприятных ощущений в виде небольшой вибрации. В связи с этим, просим владельцев обратиться к ближайшему официальному Дилеру SUBARU.
                            </td>	
                        </tr>

                    </tbody>
                </Table>
                <p style={{fontSize:"1.1rem",opacity:"0.9"}}>*Все работы по сервисным компаниям выполняются бесплатно для владельцев автомобилей</p>
                <Modal show={this.state.showNapisat} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Задать вопрос</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <MDBInput onChange={(e)=>{this.setState({name:e.target.value})}} icon="user" label="ФИО"/>
                    <MDBInput onChange={(e)=>{this.setState({phone:e.target.value})}}  icon="phone" hint="+7(_ _ _)-_ _ _-_ _-_ _"/>
                    <MDBInput
                    onChange={(e)=>{this.setState({email:e.target.value})}}
                                label="E-mail адрес"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                    <MDBInput onChange={(e)=>{this.setState({message:e.target.value})}} icon="comment" label="Ваше сообщение" type="textarea" outline/>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="white" onClick={this.handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="elegant" onClick={()=>{
                        axios.post(url+"voprsy",{name:this.state.name,phone_number:this.state.phone,email:this.state.email,message:this.state.message})
                        .then(res=>{
                            this.handleClose();
                        })
                    }}>
                        Отправить
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.showVin} onHide={this.handleCloseVin}>
                    <Modal.Header closeButton>
                    <Modal.Title>Проверка по VIN</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <MDBInput onChange={(e)=>{this.setState({namevin:e.target.value})}} icon="user" label="ФИО"/>
                    <MDBInput onChange={(e)=>{this.setState({phonevin:e.target.value})}}  icon="phone" hint="+7(_ _ _)-_ _ _-_ _-_ _"/>
                    <MDBInput
                    onChange={(e)=>{this.setState({emailvin:e.target.value})}}
                                label="E-mail адрес"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                    <MDBInput onChange={(e)=>{this.setState({vin:e.target.value})}} icon="barcode" label="VIN"/>
                    <Form.Check type="checkbox" label="Я согласен с положением на обработку данных" />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="white" onClick={this.handleCloseVin}>
                        Закрыть
                    </Button>
                    <Button variant="elegant" onClick={()=>{
                        let {namevin,phonevin,emailvin,vin}=this.state;
                        axios.post(url+"check_subaru",{name:namevin,phone_number:phonevin,email:emailvin,vin:vin}).then(res=>{
                            this.setState({showVin:false});
                        })
                    }}>
                        Отправить
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ServiceCompany;
