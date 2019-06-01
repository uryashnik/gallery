import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import ItemsList from '../items-list';
import myApi from '../../services/myApi.js';
import './app.css';

class App extends Component {
  
  state = {
    posX: 0,
    arr: myApi,
    length: 20,
    width: 150,


    };

  // apiService = new ApiService();

  // componentDidMount(){
  //   this.apiService.getData()
  //   .then((data) => {
  //     console.log(data);
  //   })
  // };

  onBtnLeftClick = () => {
    if(this.state.posX > -this.state.arr.length*155+465){
      this.setState((state) => {
        return {
          posX: state.posX - 465
        }
      })
    } else {
      this.setState((state) => {
        return {
          posX: -this.state.arr.length*155+465
        }
      })
    }

  };
 
  onBtnRightClick = () => {
    this.setState((state) => {
      return {
        posX: Math.min(state.posX + 50, 0)
      }
    })
  };

  onBtnStartClick =() => {
    this.setState((state) => {
      return {
        posX: 0
      }
    });
  };

  onBtnEndClick = () => {
    this.setState((state) => {
      return{
        posX: -(this.state.length * this.state.width)
      }
    });
  }; 

  render(){
    console.log(this.state.posX)
    console.log(this.state.arr.length)
    return (
      
      <div className="app-container">
        <button onClick={this.onBtnLeftClick} className="pos pos__left">Left</button>
        <button onClick={this.onBtnRightClick} className="pos pos__right">Right</button>
        <ItemsList state={this.state}/>
        <button onClick={this.onBtnStartClick} className="pos pos___start">Start</button>
        <button onClick={this.onBtnEndClick} className="pos pos__end">Конец</button>
      </div>
    );
  }
  
}

export default App;
