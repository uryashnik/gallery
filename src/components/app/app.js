import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import ItemsList from '../items-list';
import './app.css';

class App extends Component {

  state = {
    posX: 0,
    arr: [],
    length: 0,
    width: 150,
  };

  apiService = new ApiService();

  componentDidMount(){
    this.apiService.getData()
    .then((dataApi) => {
    this.state.arr = dataApi;
    })
  };

  onBtnLeftClick = () => {
    if (this.state.posX < this.state.length - 4) {
      this.setState(({ posX }) => {
        return {
          posX: posX + 1
        }
      });
    } else {
      this.setState((state) => {
        return {
          posX: this.state.length - 4
        }
      });
    }
  };

  onBtnRightClick = () => {
    if (this.state.posX > 0) {
      this.setState(({ posX }) => {
        return {
          posX: posX - 1
        }
      });

    } else {
      this.setState({
        posX: 0
      });
    };
  };

  onBtnStartClick = () => {
    this.setState((state) => {
      return {
        posX: 0
      }
    });
  };

  onBtnEndClick = () => {
    this.setState((state) => {
      return {
        posX: -(this.state.length * this.state.width)
      }
    });
  };

  render() {
    console.log(this.state.posX)
    console.log(this.state.arr)
    return (

      <div className="app-container">
        <button onClick={this.onBtnLeftClick} className="pos pos__left">Left</button>
        <button onClick={this.onBtnRightClick} className="pos pos__right">Right</button>
        <ItemsList props={this.state} />
        <button onClick={this.onBtnStartClick} className="pos pos___start">Start</button>
        <button onClick={this.onBtnEndClick} className="pos pos__end">Конец</button>
      </div>
    );
  }

}

export default App;
