import React from 'react';
import './App.css';
import NavbarContainer from './View/Navbar/Navbar';
import ModelList from "./View/ModelList/ModelList";
import SLider, { Slider } from './View/Slider/Slider';
import Cards from './View/Cards/Cards';
import Footer from './View/Footer/index';
import SubaruXV from './View/Cars/SubaruXV';
import Forester from './View/Cars/Forester';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Route,Switch} from 'react-router-dom';

const MainPage=()=>{
  return(
    <>
    <Slider/>
    <ModelList />
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
          <Route path='/models/subaruxv' exact  component={SubaruXV}/>
          <Route path='/models/forester' exact  component={Forester}/>
        </Switch>
      </div>
      <Footer/>
    </div>
  );
  }
}

export default App;
