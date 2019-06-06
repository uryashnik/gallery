import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import Albums from "../albums";
import Test from '../test';
import ItemsList from '../items-list';
import './app.css';

class App extends Component {

  state = {
    posX: 0,
    dataAlbums: {},
    albumId: 0,
    length: 0,
    width: 160,
    slider: true,
    tempArr: null
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

  selectAlbum = (albumId) => {
    this.setState({ albumId });
    const gallery = this.state.dataAlbums.data.filter((item) => item.albumId === albumId);
    this.setState((state) => {
      return {tempArr: gallery}
    });
    if(this.state.tempArr){
      console.log(this.state.tempArr);
    }
    
  };

  changeSlider = () => {
    this.setState(({ slider }) => {
      return { slider: !slider }
    })
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


  render() {
    console.log(this.state.slider);
    const content = this.state.slider ? <ItemsList onChangeSlider={this.changeSlider}
      posX={this.state.posX}
      tempArr={this.state.tempArr}
      /> : <Albums value={this.state.dataAlbums} onSelectAlbum={this.selectAlbum} onChangeSlider={this.changeSlider}/>
    return (

      <div className="app-container">
        {/* <button onClick={this.onBtnLeftClick} className="pos pos__left">Left</button>
        <button onClick={this.onBtnRightClick} className="pos pos__right">Right</button> */}
        {content}
        {/* <Test onSelectAlbum={this.selectAlbum}/> */}
        {/* <ItemsList props={this.state} /> */}
        {/* <button onClick={this.onBtnStartClick} className="pos pos___start">Start</button>
        <button onClick={this.onBtnEndClick} className="pos pos__end">Конец</button> */}
      </div>
    );
  }

}

export default App;
