import React, { Component } from 'react';
import ApiService from '../../services/api-service';

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
  
    return (
      <div>
        Hello
      </div>
    );
  }
  
}

export default App;
