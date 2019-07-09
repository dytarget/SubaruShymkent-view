import React from 'react';
import './App.css';
import NavbarContainer from './View/Navbar/Navbar';
import ModelList from "./View/ModelList/ModelList";
import SLider, { Slider } from './View/Slider/Slider';
import Cards from './View/Cards/Cards';
import Footer from './View/Footer/index';
import SubaruXV from './View/Cars/SubaruXV';
import ServiceCompany from './View/ServiceCompany/ServiceCompany';
import Forester from './View/Cars/Forester';
import Dealer from './View/Dealer/Dealer';
import News from './View/ShortNews/News';
import Zap4asti from './View/Zap4asti/Zap4asti';
import Accessories from './View/Accessories/Accessories';
import ShortNews from './View/ShortNews/ShortNews';
import Guarantee from './View/SimplePages/Guarantee';
import ShopTools from './View/ShopTools/ShopTools';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Route,Switch} from 'react-router-dom';
import NewsList from './View/ShortNews/NewsList';
import Outback from './View/Cars/Outback';
import Legacy from './View/Cars/Legacy';
import Tech from './View/Tech/Tech';
import Help from './View/Help/Help';
import Rules from './View/Rules/Rules';
import HowBecome from './View/HowBecome/HowBecome';
import Credit from './View/Credit/Credit';
import Leasing from './View/Leasing/Leasing';
import Insurence from './View/Insurence/Insurence';
import Choose from './View/Other/Choose';
import GetCredit from './View/Other/GetCredit';
import { WhySubaru } from './View/Other/WhySubaru';


const MainPage=()=>{

  return(
    <>
    <Slider/>
    <div style={{padding:"20px"}}>
    <ModelList  />
    </div>
    <ShopTools/>
    <Cards />
    </>
  )
}


class App extends React.Component{
  
  render(){    
  return (
    <div className="App">
        <NavbarContainer/>
        <div>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/service_company" exact component={ServiceCompany}/>
            <Route path="/dealers" exact component={Dealer}/>
            <Route path="/guarantee" exact component={Guarantee}/>
            <Route path="/offers/:id" exact component={News}/>
            <Route path="/offers_list" exact component={NewsList}/>
            <Route path="/parts" exact component={Zap4asti}/>
            <Route path="/manual" exact component={Accessories}/>
            <Route path='/models/subaruxv' exact  component={SubaruXV}/>
            <Route path='/models/forester' exact  component={Forester}/>
            <Route path='/models/outback' exact  component={Outback}/>
            <Route path='/models/legacy' exact  component={Legacy}/>
            <Route path='/techservice' exact component={Tech}/>
            <Route path='/helpful_info' exact component={Help}/>
            <Route path='/info_salon' exact component={Rules}/>
            <Route path='/how_become' exact component={HowBecome}/>
            <Route path='/credit' exact component={Credit}/>
            <Route path='/leasing' exact component={Leasing}/>
            <Route path='/insurence' exact component={Insurence}/>
            <Route path='/choose' exact component={Choose}/>
            <Route path='/getcredit' exact component={GetCredit}/>
            <Route path='/whysubaru' exact component={WhySubaru}/>

          </Switch>
        </div>
        <hr style={{marginTop:"70px"}}/>
        <ShortNews/>
        <Footer/>
    </div>
  );
  }
}

export default App;
