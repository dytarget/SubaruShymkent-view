import React from "react";
import { MDBCol, MDBContainer,MDBIcon,MDBModal, MDBRow,MDBBtn, MDBFooter,MDBInput,MDBModalBody,MDBModalHeader,MDBModalFooter } from "mdbreact";
import './Footer.css';
import {Modal,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const url="http://localhost:5000/";


class index extends React.Component {
  state={
    show:false,
    showConditions:false,
    name_testdrive:"",
    phone_testdrive:"",
    email_testdrive:"",
    model_testdrive:""
    }
    handleClose=()=>{
        this.setState({show:false});
    }
    
    handleOpen=()=>{
        this.setState({show:true});
    }

  render(){
  return (
    <MDBFooter color="dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3 ">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Контакты
            </h5>
            <p>
            ТОО "Eurasia Motor Shymkent" <br/>
             Наш адрес: <br/>г.ШЫмкент Тамерлановское шоссе, 90а <br/>т.: 8 (7252) 555-340

            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Модели
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link> <i className="fas fa-car-side"></i> Subaru XV</Link>
              </li>
              <li>
                <Link> <i className="fas fa-car-side"></i> Forester</Link>
              </li>
              <li>
                <Link> <i className="fas fa-car-side"></i> Outback</Link>
              </li>
              <li>
                <Link> <i className="fas fa-car-side"></i> Legacy</Link>
              </li>
              <li>
                <Link onClick={this.handleOpen}> <i className="fab fa-empire"></i> Тест-драйв</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="4">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Информация
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link> <i className="fab fa-bandcamp"></i> Почему Subaru?</Link>
              </li>
              <li>
                <Link><i className="fas fa-user-tag"></i> Специальные предложения</Link>
              </li>
              <li>
              <Link><i className="fas fa-car"></i> Как подобрать авто?</Link>
              </li>
              <li>
              <Link> <i className="fas fa-question-circle"></i> Как оформить кредит?</Link>
              </li>
              <li>
              <Link><i className="fas fa-wrench"></i> Сервис</Link>
              </li>
              <li>
              <Link><i className="fas fa-book"></i> Кредитные программы</Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Дилеры
            </h5>
            <ul className="list-unstyled">
            <li>
              <Link> <i className="fas fa-atlas"></i> Дилеры</Link>
              </li>
              <li>
              <Link> <i className="fas fa-globe"></i> Subaru в мире</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
            <p className="info">Производитель оставляет за собой право изменять спецификацию и цены, указанные в данной рекламе/прайс-листе, без предварительного уведомления. Информация о ценах на продукцию, модельном ряде и комплектациях представленная в настоящей рекламе/прайс-листе, носит исключительно информационный характер. Указанные цены являются максимальными ценами перепродажи, могут отличаться от действительных цен Дилеров Subaru. Приобретение любой продукции осуществляется в соответствии с условиями индивидуального договора купли- продажи. Представленная в рекламе/прайс-листе информация о продукции также не означает, что данная продукция имеется в наличии у Дилеров Subaru для продажи. Для получения информации о наличии автомобилей, а также подробных сведений об автомобилях вы можете уточнить в отделе продаж у ближайших к вам Дилеров Subaru.</p>
      </div>
      <hr />
      <div className="text-center bottom">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3 bottom" >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Subaru.kz
        </MDBContainer>
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
    </MDBFooter>
  )}
}

export default index;