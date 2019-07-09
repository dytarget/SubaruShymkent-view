import React, { Component } from 'react';
import './Cars.css';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {MDBBtn,MDBBtnGroup} from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Gallery from './Gallery';
import axios from 'axios';


export class Forester extends Component {
    state={
        file_list:[],
        color:"Jasper Green Metalic",
        value:"01",
        path:'green',
        activeItemJustified: "1",
    }
    componentDidMount(){
        window.scrollTo(0,0);
        axios.get('http://78.40.109.172:5000/files/forester').then(res=>{this.setState({file_list:res.data});});
      }
   
    render() {
        return (
            <div className="carinfo">
                <div>
                    <div className="comercial">
                        <h1>Forester</h1>
                        <p className="topp">Готов На Все.</p>
                        <p className="bottomp">Делай то, Что тебе Хочется</p>
                    </div>
                    <img style={{width:"100%"}} src={require('./images/forester/header_img01.jpg')} alt=""/>
                </div>
                <div className="text-car">
                    <h2 className="titile">Добро пожаловать в мир новых возможностей.</h2>
                    <p>Представляем абсолютно новый Forester. Полностью переработанный внутри и снаружи, Forester достиг нового уровня комфорта, безопасности и универсальности, чтобы поддержать вас во всех ваших ежедневных приключениях, одновременно поощряя вас к новым. С прочным, компактным корпусом, который легко маневрировать, но при этом просторный и удобный внутри - Forester дает вам душевное спокойствие, зная, что все в полной мере наслаждаются своим временем.</p>
                    <hr />
                </div>
                <h1 style={{fontWeight:600}}>от 11 890 000 тг</h1>
                <div className="car-image"><img style={{}} className="images" src={require('./images/forester/'+this.state.path+'/'+this.state.value+'.jpg')} alt="Forester"/></div>
                <Slider className="slid" value={this.state.value} onChange={(e)=>{if (e<10) {
                    this.setState({value:"0"+e})
                }else{this.setState({value:e})}}} style={{width:"70%"}}  min={1} max={36} />
                <h1 className="colorName fonts">{this.state.color}</h1>
                 <MDBBtnGroup className="mr-2 pickers">
                 <MDBBtnGroup className="mr-2">

                    <MDBBtn style={{background:"#49b371"}}  onClick={()=>{this.setState({color:"Jasper Green Metallic",path:"green"})}} color="deep-green">1</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Crystal White Pearl",path:"white"})}} color="white">2</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Ice Silver Metallic",path:"silver"})}}  color="blue-grey">3</MDBBtn>
                    <MDBBtn style={{background:"#b0898c"}}  onClick={()=>{this.setState({color:"Sepia Bronze Metallic",path:"bronze"})}} color="light-fewblue">4</MDBBtn>
                    </MDBBtnGroup>
                    <MDBBtnGroup className="mr-2">
                    <MDBBtn  onClick={()=>{this.setState({color:"Horizon Blue Pearl",path:"blue"})}} color="blue">5</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Crimson Red Pearl",path:"red"})}}  color="red">6</MDBBtn>
                    <MDBBtn onClick={()=>{this.setState({color:"Dark Grey Metallic",path:"grey"})}}  color="grey">7</MDBBtn>
                    <MDBBtn  onClick={()=>{this.setState({color:"Crystal Black Silica",path:"black"})}} color="black">8</MDBBtn>
                    </MDBBtnGroup>

                </MDBBtnGroup>
                
                <h2 className="gradus">Вид на 360C°</h2>
                <MDBBtn className="credit-button" onClick={()=>{window.open('https://subarufinance.kz/')}} color="elegant">Выгодное кредитование с Subaru</MDBBtn>

                <div><Gallery  {...this.props}/></div>
                <div className="files">
                    {this.state.file_list.map(file=>{
                        return(
                            <div>
                                <a onClick={()=>{window.open("http://78.40.109.172:5000/"+file.filename)}}>{file.title_of_file}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Forester
