import React, { Component } from 'react';
import axios from 'axios';
import {MDBCard,MDBIcon,MDBCardBody,MDBCardTitle,MDBCardImage,MDBCardText} from 'mdbreact';
import {Link} from 'react-router-dom';

const url="http://78.40.109.172:5000/";

export class NewsList extends Component {
    state={
        offers:[]
    }

    componentDidMount(){
        window.scrollTo(0,0);
        axios.get(url+"special_offers").then(res=>{this.setState({offers:res.data})})
    }

    render() {
        return (
            <div>
                <div className="grided_offers">
                {this.state.offers.map(offer=>{
                    return(
                                 <MDBCard  style={{ maxWidth: "22rem" }}>
                                    <MDBCardImage top src={url+offer.main_photo} overlay="white-slight"
                                        hover waves alt="MDBCard image cap" />
                                    <MDBCardBody className="elegant-color white-text rounded-bottom">
                                        <a style={{color:"white",float:"right"}} href="#!" className="activator waves-effect waves-light mr-4">
                                        <MDBIcon icon="share-alt" />
                                        </a>
                                        <MDBCardTitle>{offer.title.substring(0,50)}...</MDBCardTitle>
                                        <hr className="hr-light" />
                                        <MDBCardText className="white-text">
                                            {offer.text.substring(0,100)}...
                                        </MDBCardText>
                                        <Link to={"/offers/"+offer.id} className="black-text d-flex justify-content-end">
                                        <h5 className="white-text">
                                            Читать больше
                                            <MDBIcon icon="angle-double-right" />
                                        </h5>
                                        </Link>
                                    </MDBCardBody>
                                </MDBCard>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default NewsList;
