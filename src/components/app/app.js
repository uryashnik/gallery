import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Albums from "../albums";
import ItemsList from "../items-list";
import styled from 'styled-components';

class App extends Component {
  state = {
    posX: 0,
    dataAlbums: {},
    albumId: 0,
    length: 0,
    slider: false,
    isLoading: false,
    tempArr: [],
    imgId: null,
    modal: false,
    searchTerm: ''
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
    const { isLoading } = this.state;
    if (isLoading) {
      const timer = setTimeout(() => (this.setState((prevState) => ({ isLoading: !prevState.isLoading }))), 2000);
    };
  }

  selectAlbum = albumId => {
    this.setState(state => ({ albumId: albumId }));
    const gallery = this.state.dataAlbums.data.filter(item => item.albumId === albumId);
    this.setState(state => ({ tempArr: gallery, length: gallery.length }));
  };

  selectImgId = (id) => {
    this.setState(() => ({ imgId: id }));
  };

  changeSlider = () => {
    const { slider } = this.state;
    if (slider) {
      this.setState(({ slider }) => ({ slider: !slider }))
    } else {
      this.setState(({ slider }) => ({ slider: !slider, isLoading: true }))
    }
  };

  modalChange = () => {
    this.setState(({ modal }) => ({ modal: !modal }));
  };

  searchChange = (ev) => {
    const { value } = ev.target;
    return this.setState((state) => ({ searchTerm: value }));
  };

  searched (searchTerm) {
    return function (item) {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  };

  BtnRightClick = () => {
    this.state.posX < this.state.length - 4 ? this.setState(({ posX }) => ({ posX: posX + 1 })) :
      this.setState(({ length }) => ({ posX: length - 4 }))
  };

  BtnLeftClick = () => {
    this.state.posX > 0 ? this.setState(({ posX }) => ({ posX: posX - 1 })) :
      this.setState({ posX: 0 });

  };

  render() {
    const { posX, tempArr, isLoading, imgId, modal, searchTerm } = this.state;
    const { data } = this.state.dataAlbums;
    console.log(searchTerm);
    console.log(data);
    const content = this.state.slider ? (
      <ItemsList
        onChangeSlider={this.changeSlider}
        posX={posX}
        tempArr={tempArr}
        isLoading={isLoading}
        onBtnRightClick={this.BtnRightClick}
        onBtnLeftClick={this.BtnLeftClick}
        onSelectImgId={this.selectImgId}
        imgId={imgId}
        modal={modal}
        onModalChange={this.modalChange}
      />
    ) : (
      <Albums
        value={this.state.dataAlbums}
        onSelectAlbum={this.selectAlbum}
        onChangeSlider={this.changeSlider}
      />
    );


    return (

      <Container>
        <Header>
          <TitleSearch>Поиск</TitleSearch>
          <Search type='search' onChange={this.searchChange} />
        </Header>

        <ContainerWrap>
          {data && searchTerm.length !== 0 ? data.filter(this.searched(searchTerm)).map(item => {
            return <FoundItem  key={item.id}>
                      <FoundTitle>{item.title}</FoundTitle>
                    </FoundItem>
          }) : content }
        </ContainerWrap>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  background: lightgrey;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 50px;
  background-color: blueviolet;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
`;

const TitleSearch = styled.span`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Search = styled.input`
  margin-bottom: 10px;
  font-weight: bold;
`;

const ContainerWrap = styled.div`
  
`;

const FoundItem = styled.div`
  display: flex;
  height: 170px;
  width: 500px;
  border: 2px solid black;
  margin-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
`;

const FoundTitle = styled.div`
  margin-left: 5px;
`;