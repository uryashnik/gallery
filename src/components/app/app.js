import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import Albums from "../albums";

import './app.css';

class App extends Component {

  state = {
    posX: 0,
    dataAlbums: {},
    albumId: 0,
    length: 0,
    width: 160
  };


  apiService = new ApiService();



  componentDidMount = () => {
    this.apiService.getData()
      .then(dataArr => {
        this.setState((state) => {
          return {
            dataAlbums: dataArr
          }
        }) 
      })
      .catch(error => console.log(error))
  };

  onDefineAlbum = (id) => {
    this.setState({albumId: id});
  };

  onBtnRightClick = () => {
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

  onBtnLeftClick = () => {
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
        posX: 4996
      }
    });
  };

  render() {
    console.log(this.state.dataAlbums);
    
    this.onDefineAlbum(3);
    console.log(this.state.albumId);
    return (

      <div className="app-container">
        {/* <button onClick={this.onBtnLeftClick} className="pos pos__left">Left</button>
        <button onClick={this.onBtnRightClick} className="pos pos__right">Right</button> */}
        <Albums value={this.state.dataAlbums} />
        
        {/* <ItemsList props={this.state} /> */}
        {/* <button onClick={this.onBtnStartClick} className="pos pos___start">Start</button>
        <button onClick={this.onBtnEndClick} className="pos pos__end">Конец</button> */}
      </div>
    );
  }

}

export default App;
