import React, { Component } from 'react';
import './Hepl.css';

export class Help extends Component {
    render() {
        return (
            <div className="contian">
                <h4>Полезная информация</h4>
                <img width="90%" src={require('./gg.jpg')} alt=""/>
                <h4>Важность использования оригинальных тормозных колодок</h4>
                <iframe width="70%" height="405" src="https://www.youtube.com/embed/tiBmE4RUgO8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>Работа тормозной системы Subaru</h4>
                <iframe width="70%" height="405" src="https://www.youtube.com/embed/sigmzRilIsY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Help;
