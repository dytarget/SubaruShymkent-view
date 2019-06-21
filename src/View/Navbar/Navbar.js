import React, { Component } from 'react';
import {MDBDropdown,MDBDropdownItem,MDBDropdownMenu,MDBDropdownToggle,MDBInput} from 'mdbreact';
import {Modal,Button} from 'react-bootstrap';
import {Nav,Navbar,NavDropdown,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBModal,MDBModalHeader,MDBModalBody,MDBModalFooter, MDBIcon,MDBBtn } from
"mdbreact";

export class NavbarContainer extends Component {
    state={
        showNapisat:false,
        phone:"87774136970",
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
                        <button onClick={this.handleOpen} className="napisatNam mr-sm-2">Написать нам</button>
                        <NavDropdown id="drdown mr-sm-4" title={<span style={{color:'white'}}>О компании</span>}>
                            <div className="dr-men">
                            <div className="dr-item"><Link className="link-dp">Почему Subaru?</Link></div>
                            <div className="dr-item"><Link className="link-dp">Новости</Link></div>
                            <div className="dr-item"><Link className="link-dp">История</Link></div> 
                            <div className="dr-item"><Link className="link-dp">Дилеры</Link></div>
                            <div className="dr-item"><Link className="link-dp">Как стать дилером Subaru</Link></div>
                            </div>
                        </NavDropdown>
                        <Link className="link mr-sm-4">Специальные предложения </Link>
                        <Link className="link mr-sm-4">Сервисные кампании </Link>
                        </Nav>
                        <MDBInput label={<p style={{color:"white"}}> Поиск</p>} className="col-xs-6 mr-sm-4" style={{width:"100px",color:"white"}} />
                        <Navbar.Brand>
                        <img style={{cursor:"pointer"}} onClick={()=>{window.open("http://www.astana-motors.kz/")}} height="30px" src={require('../../img/amlogo.png')} alt="Astana Motors"/>
                        </Navbar.Brand>
                        
                    </Navbar.Collapse>
                    </Navbar>
                    <Navbar className="nav2">
                    <Navbar.Brand style={{marginLeft:"18px"}}>
                        <Link to="/">
                        <img src={require('../../img/subaru-logo.png')} alt="Subaru"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                        <MDBDropdown color="info-color">
                            <MDBDropdownToggle nav caret>
                                <div className="d-none d-md-inline"><strong color="black">Модельный ряд</strong></div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBDropdown color="info-color">
                            <MDBDropdownToggle nav caret>
                                <div className="d-none d-md-inline">Владельцам</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                            <MDBDropdown color="info-color">
                            <MDBDropdownToggle nav caret>
                                <div className="d-none d-md-inline">Финансовые продукты</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu right>
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                            </MDBDropdown>
                        <Nav.Link onClick={()=>{window.open("http://subarutrade-in.kz/")}} className="mr-sm-2">
                            Автомобили с пробегом
                            </Nav.Link>
                            <Nav.Link onClick={()=>{this.setState({show:true})}} className="mr-sm-2">
                            Тест-Драйв
                            </Nav.Link>
                            <Nav.Link className="mr-sm-2">
                            Дилеры
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>

                <Modal show={this.state.showNapisat} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Написать нам</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <MDBInput label="ФИО"/>
                    <MDBInput hint="+7(_ _ _)-_ _ _-_ _-_ _"/>
                    <MDBInput label="Ваше сообщение" type="textarea" outline/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Закрыть
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
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
                                label="ФИО"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="E-mail адрес"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                               
                             <MDBInput
                                label="Номер телефона"
                                icon="phone"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />

                            <select className="browser-default custom-select">
                                <option>Выберите модель</option>
                                <option value="1">Subaru XV</option>
                                <option value="2">Forester</option>
                                <option value="3">Legacy</option>
                                <option value="3">Outback</option>
                            </select>
                         
                             
                            </div>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Мне уже есть 18" />
                                <Form.Check type="checkbox" label="У меня есть водительские права" />
                                <Form.Check type="checkbox" label='Я прочитал и согласен с условиями заявки на тест-драйв' />
                            </Form.Group>
                            <p onClick={()=>{this.setState({showConditions:true})}}><u>Условия заявки на тест драйв</u></p>
                            <div className="text-center">
                            <MDBBtn outline color="info">
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
                    <MDBBtn color="secondary" onClick={()=>{this.setState({showConditions:false})}}>Закрыть</MDBBtn>
                  </MDBModalFooter>
                </MDBModal>             
                </Modal>
            
            </div>
        )
    }
}

export default NavbarContainer;
