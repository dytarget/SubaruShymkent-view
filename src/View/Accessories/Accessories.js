import React, { Component } from 'react';
import './Accessories.css';
import {Table} from 'react-bootstrap';


const url="http://localhost:5000/";

export class Accessories extends Component {
    render() {
        return (
            <div className="all">
                <h3>Руководства</h3>
                <p>В данном разделе Вы можете скачать руководство по эксплуатации автомобилей  Subaru.</p>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td className="bolded">Forester 2016-2017</td>
                            <td className="bolded">Forester 2018</td>
                            <td className="bolded">Forester 2019</td>
                        </tr>
                        <tr>
                            <td> <img src={require('./model2.jpg')} alt="forester 2016-2017"/> </td>
                            <td><img src={require('./main.jpg')} alt="forester 2018"/></td>
                            <td><img src={require('./main2.jpg')} alt="forester 2019"/></td>
                        </tr>
                        <tr>
                            <td> <a style={{color:"#3e3284",textDecoration:"underline"}} onClick={()=>{window.open(url+'assets/Forester 2016-2017-compressed.pdf')}}>Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf"  download="newfilename">Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf"  download="newfilename">Скачать руководство</a></td>
                        </tr>
                        <tr>
                            <td className="bolded">Legacy & Outback 2018</td>
                            <td className="bolded">WRX 2018</td>
                            <td className="bolded">Subaru XV 2018</td>
                        </tr>
                        <tr>
                        <td> <img src={require('./18outback.png')} alt="outback 18"/> </td>
                            <td><img src={require('./model5.jpg')} alt="wrx2018"/></td>
                            <td><img src={require('./xv17.jpg')} alt="xv 2018"/></td>
                        </tr>
                        <tr>
                            <td> <a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf" download="newfilename">Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf"  download="newfilename">Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf"  download="newfilename">Скачать руководство</a></td>
                        </tr>
                    </tbody>
                </Table>

                <p>В данном разделе Вы можете скачать руководство по эксплуатации системам «EyeSight» и «StarLink»</p>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td className="bolded">EyeSight</td>
                            <td className="bolded">StarLink</td>
                            <td  className="bolded">ЭРА-Глонасс</td>
                        </tr>
                        <tr>
                            <td> <img src={require('./eyesight.png')} alt="eyesight"/> </td>
                            <td><img src={require('./starlink.png')} alt="starlink"/></td>
                            <td><img style={{width:"100px"}} src={require('./glonass.jpg')} alt="glonass"/></td>
                        </tr>
                        <tr>
                            <td>  <a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf" >Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf" download="newfilename">Скачать руководство</a></td>
                            <td><a style={{color:"#3e3284",textDecoration:"underline"}} href="./Forester 2016-2017-compressed.pdf" download="newfilename">Скачать руководство</a></td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Accessories;
