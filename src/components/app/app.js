import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import ItemsList from '../items-list';

class App extends Component {
  
  state = {};

  apiService = new ApiService();

  componentDidMount(){
    this.apiService.getData()
    .then((data) => {
      console.log(data);
    })
  };

  render(){
    console.log(this.node);
    return (
      <div>
        <button onClick={ () => console.log("down")}>Left</button>
        <ItemsList props={this.state}/>
      </div>
    );
  }
  
}

export default App;
