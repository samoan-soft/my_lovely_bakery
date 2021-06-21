import { Component } from 'react';
import './App.css';
import Cake from './components/Cake';
import Header from './components/Header';

export default class App extends Component{

  render(){
    return(
        <div>
        <Header/>
        <div className="CakeContent">
          <Cake/>
        </div>
      </div> 
    );
  }
}