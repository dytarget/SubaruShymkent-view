import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import {MDBBtn} from 'mdbreact';

export class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                        className="d-block w-100 im"
                        src={require('../../img/1.jpg')}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <MDBBtn style={{borderRadius:"40px",fontSize:"1.2rem"}} size="lg"  gradient="blue">Узнать больше >></MDBBtn>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:'500px'}}>
                        <img
                        className="d-block w-100 im"
                        src={require('../../img/2.jpg')}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <MDBBtn style={{borderRadius:"40px",fontSize:"1.2rem"}} size="lg" gradient="blue">Узнать больше>></MDBBtn>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider
