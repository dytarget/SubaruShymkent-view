import React, { Component } from 'react';
import {MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle,MDBInput} from 'mdbreact';
import {Modal,Button} from 'react-bootstrap';
import {Nav,Navbar,NavDropdown,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { MDBContainer,MDBAlert, MDBRow, MDBCol, MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter, MDBIcon,MDBBtn } from
"mdbreact";
import ModelList from '../ModelList/ModelList';
import axios from 'axios';

const url="http://localhost:5000/";
export class NavbarContainer extends Component {
    state={
        showNapisat:false,
        name_napisat:"",
        phone_napisat:"",
        email_napistal:"",
        message_napisat:"",
        name_testdrive:"",
        phone_testdrive:"",
        email_testdrive:"",
        model_testdrive:"",
        show:false,
        showConditions:false
    }
    handleClose=()=>{
        this.setState({showNapisat:false});
    }
     
    handleOpen=()=>{
        this.setState({showNapisat:true});
    }
    handleCloseTest=()=>{
        this.setState({show:false});
    }
     
    handleOpenTest=()=>{
        this.setState({show:true});
    }

    render() {
        return (
            <div>
                 <Navbar className="justify-content-end navb">
                    
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                        <Link onClick={this.handleOpen} className="link ">Написать нам</Link>
                        <Link to="/offers_list" className="link ">Специальные предложения </Link>
                        <Link className="link " to="/service_company" style={{marginRight:"20px"}}>Сервисные кампании </Link>
                        </Nav>
                        <Navbar.Brand>
                        <img style={{cursor:"pointer"}} onClick={()=>{window.open("http://www.astana-motors.kz/")}}  src={require('../../img/amlogo.png')} alt="Astana Motors"/>
                        </Navbar.Brand>
                        
                    </Navbar.Collapse>
                    </Navbar>
                    <Navbar className="nav2">
                    <Navbar.Brand className="subarubrand" style={{marginLeft:"18px"}}>
                        <Link exact to="/">
                        <img src={require('../../img/subaru-logo.png')}  alt="Subaru"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                        <MDBDropdown color="info-color">
                            <MDBDropdownToggle className="navlinks" nav caret>
                                <div className="d-none d-md-inline"><strong color="black">Модельный ряд</strong></div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="menu" center>
                                <ModelList/>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBDropdown color="info-color">
                            <MDBDropdownToggle className="navlinks" nav caret>
                                <div className="d-none d-md-inline">Владельцам</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="menu" center>
                                <div className="dr-men">
                                <div className="dr-item"><Link to="/parts" className="link-dp">Запчасти</Link></div>
                                <div className="dr-item"><Link to="/guarantee" className="link-dp">Гарантийное обслуживание</Link></div> 
                                <div className="dr-item"><Link className="link-dp">Техническое обслуживание</Link></div>
                                <div className="dr-item"><Link className="link-dp">Полезная информация</Link></div>
                                <div className="dr-item"><Link to="/manual" className="link-dp">Руководства</Link></div>
                                <div className="dr-item"><Link className="link-dp">Информация для посетителей салонов</Link></div>
                            </div>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBDropdown color="info-color">
                            <MDBDropdownToggle className="navlinks" nav caret>
                                <div className="d-none d-md-inline">О нашей компании</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="menu" center>
                            <div className="dr-men">
                            <div className="dr-item"><Link className="link-dp">Почему Subaru?</Link></div>
                            <div className="dr-item"><Link className="link-dp">Новости</Link></div>
                            <div className="dr-item"><Link className="link-dp">История</Link></div> 
                            <div className="dr-item"><Link className="link-dp">Дилеры</Link></div>
                            <div className="dr-item"><Link className="link-dp">Как стать дилером Subaru</Link></div>
                            </div>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                        <Nav.Link onClick={()=>{window.open("http://subarutrade-in.kz/")}} className="navlinks">Автомобили с пробегом</Nav.Link>
                            <Nav.Link className="navlinks" onClick={()=>{this.setState({show:true})}} >Тест-Драйв</Nav.Link>
                            <Nav.Link  className="navlinks mr-sm-4"><Link to="/dealers" style={{color:"inherit"}}>Дилеры</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>

                <Modal show={this.state.showNapisat} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Написать нам</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <MDBInput onChange={(e)=>{this.setState({name_napisat:e.target.value})}} icon="user" label="ФИО"/>
                <MDBInput onChange={(e)=>{this.setState({phone_napisat:e.target.value})}} icon="phone" hint="+7(_ _ _)-_ _ _-_ _-_ _"/>
                <MDBInput onChange={(e)=>{this.setState({email_napistal:e.target.value})}}
                            label="E-mail адрес"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                <MDBInput onChange={(e)=>{this.setState({message_napisat:e.target.value})}} icon="comment" label="Ваше сообщение" type="textarea" outline/>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="white" onClick={this.handleClose}>
                    Закрыть
                </Button>
                <Button variant="elegant" onClick={()=>{
                    axios.post(url+"voprsy",{name:this.state.name_napisat,phone_number:this.state.phone_napisat,
                    email:this.state.email_napistal,message:this.state.message_napisat}).then(res=>{
                        this.handleClose();
                    })
                }}>
                    Отправить
                </Button>
                </Modal.Footer>
                </Modal>

                <Modal   show={this.state.show} onHide={this.handleCloseTest}>
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

                            <select className="browser-default custom-select" onChange={(e)=>{console.log(e.target);
                             this.setState({model_testdrive:e.target.value})}}>
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
                                .then(res=>{this.handleCloseTest()})
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

export default NavbarContainer;
