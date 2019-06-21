import React, { Component } from 'react';
import './ModelList.css';
import {Link} from 'react-router-dom';

export class ModelList extends Component {
    state={
        cars:[
            {
                path:"/models/subaruxv",
                photo:"./modelsIcon/subaruxv.jpg",
                name:"Subaru XV",
                price:"от 11 090 000 тг"
            },
            {
                path:"/models/forester",
                photo:"./modelsIcon/forester.jpg",
                name:"Forester",
                price:"от 11 980 000 тг"
            },{
                path:"/models/outback",
                photo:"./modelsIcon/outback.png",
                name:"Outback",
                price:"от 14 990 000 тг"
            },
            {
                path:"/models/legacy",
                photo:"./modelsIcon/legacy.png",
                name:"Legacy",
                price:"от 13 290 000 тг"
            }
        ]
    }

    render() {
        return (
            <div>
                <div className="model-list">
                    {this.state.cars.map(car=>{
                        return(
                        <Link to={car.path} className="model">
                            <span id="image"><img src={require(`${car.photo}`)} alt={car.name}/></span>
                            <span id="name">{car.name}</span>
                            <span id="price">{car.price}</span>
                        </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ModelList;
