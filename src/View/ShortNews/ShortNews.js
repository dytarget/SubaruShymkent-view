import React, { Component } from 'react';
import './ShortNews.css';
import {MDBBtn,MDBInput,MDBRow,MDBCol,MDBIcon,MDBContainer,MDBModalBody,MDBModal,MDBModalFooter,MDBModalHeader} from 'mdbreact';
import {Modal,Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const url="http://78.40.109.172:5000/";

export class Shortnews extends Component {
    state={
        offers:[],
        show:false,
        showConditions:false
    }
    handleClose=()=>{
        this.setState({show:false});
    }
     
    handleOpen=()=>{
        this.setState({show:true});
    }

    componentDidMount(){
        axios.get(url+'special_offers3')
        .then(res=>{
            this.setState({offers:res.data})
        })
    }

    render() {
        return (
            <div >
            <h2 style={{textAlign:"center",cursor:"pointer"}}><Link to="/offers_list" className="title11" style={{outline:"none"}}>Больше новостей</Link></h2>
            <div style={{display:"flex",justifyContent:"center"}}>
            <div className="cards-container1">
                {this.state.offers.map(offer=>{
                    return(
                        <Link onClick={()=>{window.scrollTo(0,0)}} to={`/offers/${offer.id}`} style={{color:"#fff"}}>
                        <div className="cards1" style={{backgroundImage:'url('+url+offer.main_photo+')'}}>
                            <div className="absolute"></div>
                            <div className="text1">
                            <h5>{offer.title}</h5>
                            </div>
                        </div>
                        </Link>
                    )
                })}
              
                {/* <Link style={{color:"#fff"}}>
                <div  className="cards1" style={{backgroundImage:"url("+require('./second.jpg')+")"}}> 
                <div className="absolute">

                </div>
                    <div className="text1">
                    <h5>Titlfwefwefwefwefwee</h5>
                    </div>                    
                </div>
                </Link>
                <Link style={{color:"#fff"}}>
                <div  className="cards1" style={{backgroundImage:"url("+require('./third.jpg')+")"}}> 
                <div className="absolute">

                </div>
                <div className="text1">
                      <h5>Titlfwefewfweff</h5>
                </div>
                </div>
                </Link> */}
            </div>
            </div>
            </div>
        )
    }
}

export default Shortnews;
