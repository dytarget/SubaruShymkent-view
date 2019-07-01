import React, { Component } from 'react';
import './Cards.css';
import {MDBBtn,MDBInput,MDBRow,MDBCol,MDBIcon,MDBContainer,MDBModalBody,MDBModal,MDBModalFooter,MDBModalHeader} from 'mdbreact';
import {Modal,Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import axios from 'axios';

const url="http://localhost:5000/";

export class Cards extends Component {
    state={
        name_testdrive:"",
        phone_testdrive:"",
        email_testdrive:"",
        model_testdrive:"",
        show:false,
        showConditions:false
    }
    handleClose=()=>{
        this.setState({show:false});
    }
     
    handleOpen=()=>{
        this.setState({show:true});
    }

    render() {
        return (
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className="cards-container">
                <div className="cards" style={{backgroundImage:"url("+require('./images/2eyesight.jpg')+")"}}>
                    <div className="text">
                        <h2>EyeSight</h2>
                        <p>Система помощи водителю</p>
                    </div>
                    <MDBBtn onClick={()=>{window.open("http://eyesight.subaru.kz/")}} gradient="aqua">Подробнее</MDBBtn>
                </div>
                <div  className="cards" style={{backgroundImage:"url("+require('./images/special2.jpg')+")"}}> 
                    <div className="text">
                        <h2>Пройти <br/> тест драйв</h2>
                        <p>Ощути комфорт, скорость <br/> и надежность сам!</p>
                    </div>
                    <MDBBtn onClick={this.handleOpen} gradient="aqua">Записаться на тест-драйв</MDBBtn>
                    
                </div>
                <div  className="cards" style={{backgroundImage:"url("+require('./images/special3.jpg')+")"}}> 
                    <div className="text">
                        <h2>Автокредитование</h2>
                        <p>Автомобили японского <br/> производства. <br/> Подробнее на </p>
                    </div>
                    <MDBBtn onClick={()=>{window.open("https://subarufinance.kz/")}} gradient="aqua">www.subarufinance.kz</MDBBtn>
                </div>
            </div>
       
            <Modal   show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Записаться на тест драйв </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <MDBContainer>
                     <MDBRow>
                        <MDBCol md="12">
                        <form >
                            <p className="h5 mb-4">Записаться на тест драйв в городе Шымкент</p>
                            <div className="grey-text">
                            <MDBInput
                            onChange={(e)=>{this.setState({name_testdrive:e.target.value})}}
                                label="ФИО"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                            onChange={(e)=>{this.setState({email_testdrive:e.target.value})}}
                                label="E-mail адрес"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                               
                             <MDBInput
                             onChange={(e)=>{this.setState({phone_testdrive:e.target.value})}}
                                label="Номер телефона"
                                icon="phone"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />

                            <select className="browser-default custom-select" onChange={(e)=>{this.setState({model_testdrive:e.target.value})}}>
                                <option>Выберите модель</option>
                                <option value="Subaru XV">Subaru XV</option>
                                <option value="Forester">Forester</option>
                                <option value="Legacy">Legacy</option>
                                <option value="Outback">Outback</option>
                            </select>
                         
                             
                            </div>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Мне уже есть 18" />
                                <Form.Check type="checkbox" label="У меня есть водительские права" />
                                <Form.Check type="checkbox" label='Я прочитал и согласен с условиями заявки на тест-драйв' />
                            </Form.Group>
                            <p onClick={()=>{this.setState({showConditions:true})}}><u style={{cursor:"pointer"}}>Условия заявки на тест драйв</u></p>
                            <div className="text-center">
                            <MDBBtn onClick={()=>{
                                let {name_testdrive,email_testdrive,phone_testdrive,model_testdrive}=this.state;
                                axios.post(url+'test_drive',{name:name_testdrive,email:email_testdrive,phone_number:phone_testdrive,car_model:model_testdrive})
                                .then(res=>{this.handleClose()})
                            }} outline color="elegant">
                                Отправить <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCol>
                    </MDBRow>
                    </MDBContainer>   
                    </Modal.Body>   
                    <MDBModal size="lg" isOpen={this.state.showConditions} toggle={()=>{this.setState({showConditions:false})}}>
                  <MDBModalHeader toggle={()=>{this.setState({showConditions:false})}}>Согласие на обработку персональных данных</MDBModalHeader>
                  <MDBModalBody>
                    

Настоящим я выражаю свое безусловное согласие на обработку своих персональных данных (которые предоставлены или могут быть предоставлены мной ТОО «Subaru Kazakhstan») любым способом допустимым законодательством РК, в том числе на сбор, систематизацию, накопление, хранение, уточнение, использование, уничтожение и распространение путем передачи этих данных , а также любым другим компаниям, с которыми ТОО «Subaru Kazakhstan» по собственному усмотрению заключают соответствующие договоры, для следующих основных целей: предоставления мне информации о товарах и услугах, которые потенциально могут представлять интерес; проведения социологических и других исследований, в том числе исследования индекса удовлетворенности потребителей качеством предоставленных товаров и услуг, проводимых ТОО «Subaru Kazakhstan».

Я уведомлен и согласен с тем, что указанное согласие может быть отозвано путем направления в письменной форме уведомления в адрес ТОО «Subaru Kazakhstan».

                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="elegant" onClick={()=>{this.setState({showConditions:false})}}>Закрыть</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>             
                </Modal>
            
            </div>
        )
    }
}

export default Cards;
