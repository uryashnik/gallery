import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import ItemsList from '../items-list';
import myApi from '../../services/myApi.js';
class App extends Component {
  
  state = {
    position: 0,
    data: myApi
    };

  // apiService = new ApiService();

  // componentDidMount(){
  //   this.apiService.getData()
  //   .then((data) => {
  //     console.log(data);
  //   })
  // };

  onBtnLeftClick = () => {
    if(this.state.position < this.state.data.length*155-465){
      this.setState((state) => {
        return {
          position:  -this.state.data.length*155-465
        }
      })
    } else {
      this.setState((state) => {
        return {
          position: state.position -500
        }
      })
    }

  };
 
  onBtnRightClick = () => {
    this.setState((state) => {
      return {
        position: Math.min(state.position + 50, 0)
      }
    })
  };
  render(){
    console.log(this.state.position)
    return (
      
      <div>
        <button onClick={this.onBtnLeftClick}>Left</button>
        <button onClick={this.onBtnRightClick}>Right</button>
        <ItemsList state={this.state}/>
      </div>
    );
  }
  
}

export default App;
