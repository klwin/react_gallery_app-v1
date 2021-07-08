import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import NotFound from './Components/NotFound';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      flowers: [],
      sunsets: [],
      boats: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch('flowers');
    this.performSearch('sunsets');
    this.performSearch('boats');
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&media=photos&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if(query === "flowers") {
          this.setState({
            flowers: response.data.photos.photo,
            loading: false
          });
        }
        else if(query === "sunsets") {
          this.setState({
            sunsets: response.data.photos.photo,
            loading: false
          });
        }
        else if(query === "boats") {
          this.setState({
            boats: response.data.photos.photo,
            loading: false
          });
        }
        else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false
          });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} /> 
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/flowers" /> }  />
            <Route path="/flowers" render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoList data={this.state.flowers} /> } />
            <Route path="/sunsets" render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoList data={this.state.sunsets} /> } />
            <Route path="/boats" render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoList data={this.state.boats} /> } />
            <Route path="/search/:text" render={ () => (this.state.loading) ? <p>Loading...</p> : <PhotoList data={this.state.photos} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}