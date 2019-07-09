import React, { Component } from 'react';
import axios from 'axios';
import './ShortNews.css';
import {Fragment} from 'react';



const url="http://78.40.109.172:5000/";


export class News extends Component {
    state={
        info:''
    }
    refresh(){
        axios.get(url+'special_offers/'+this.props.match.params.id)
        .then(res=>{
            this.setState({info:res.data[0]});
        })
        .catch(err=>{})
    }
    componentDidUpdate(){
        this.refresh();
    }
    componentWillMount(){
        this.refresh();
        window.scrollTo(0,0);
    }

    render() {
      
        return (
            <>
            <h6 className="date">{this.state.info.date}</h6>
            <h1 className="title_offer" style={{maxWidth:"700px"}}>{this.state.info.title} </h1>
            <div className="card_offer">
                <img src={url+this.state.info.main_photo} alt=""/>
            </div>
            <p className="text_offer">{this.state.info.text && this.state.info.text.split('\n').map((item, key) => {
  return <Fragment key={key}>{item}<br/></Fragment>
})}</p>
            </>
        )
    }
}

export default News;
