import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Albums from "../albums";
//import Test from "../test";
import ItemsList from "../items-list";
import "./app.css";

class App extends Component {
  state = {
    posX: 0,
    dataAlbums: {},
    albumId: 0,
    length: 0,
    width: 160,
    slider: false,
    isLoading: false,
    tempArr: []
  };

  apiService = new ApiService();

  componentDidMount = () => {
    this.apiService
      .getData()
      .then(dataArr => {
        this.setState(state => {
          return {
            dataAlbums: dataArr
          };
        });
      })
      .catch(error => console.log(error));
  };
  componentDidUpdate = (prevProps, prevState) => {
    const {isLoading, slider} = this.state;

    // if(prevState.slider !== slider){
    //   this.setState(( state ) => ({isLoading: true}));
    // };
    if(isLoading){
      const timer = setTimeout(() => (this.setState((state) => ({isLoading: !prevState.isLoading}))), 2000);
      console.log(`didUpdate ${isLoading}`);
    };
  }

  selectAlbum = albumId => {
    this.setState(state => ({ albumId: albumId }));

    const gallery = this.state.dataAlbums.data.filter(item => item.albumId === albumId);
    this.setState(state => ({ tempArr: gallery, length: gallery.length }));
  };

  changeSlider = () => {
      this.setState(({ slider, isLoading }) => ({slider: !slider, isLoading: true}));
  };

  BtnRightClick = () => {
    this.state.posX < this.state.length - 4 ? this.setState(({ posX }) => ({posX: posX + 1})) :
                                             this.setState(({length}) => ({ posX: length - 4}))
  };

  BtnLeftClick = () => {
    this.state.posX > 0 ? this.setState(({ posX }) => ({posX: posX - 1})) : 
                          this.setState({ posX: 0 });

  };

  render() {
    const content = this.state.slider ? (
      <ItemsList
        onChangeSlider={this.changeSlider}
        posX={this.state.posX}
        tempArr={this.state.tempArr}
        isLoading={this.state.isLoading}
        onBtnRightClick={this.BtnRightClick}
        onBtnLeftClick={this.BtnLeftClick}
      />
    ) : (
      <Albums
        value={this.state.dataAlbums}
        onSelectAlbum={this.selectAlbum}
        onChangeSlider={this.changeSlider}
      />
    );
    return (
      <div className="app-container">
        {content}
      </div>
    );
  }
}

export default App;
