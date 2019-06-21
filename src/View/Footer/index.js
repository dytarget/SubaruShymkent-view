import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css';
import {Link} from 'react-router-dom';


const index = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3 ">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Поделиться
            </h5>
            <p>
            
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
                <Link> <i className="fab fa-empire"></i> Тест-драйв</Link>
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
                <Link> <i className="fal fa-ad"></i> Почему Subaru?</Link>
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
              <Link><i className="fas fa-check-circle"></i> Согласие на обработку данных</Link>
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
    </MDBFooter>
  );
}

export default index;