import React, { Component } from 'react';
import axios from 'axios';

import apiKey from '../config';
import Gallery from './Gallery';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: this.props.query,
            photos: [],
            loading: true
        };
    }

    componentDidUpdate() {
        let query = (this.props.query) ? this.props.query : this.props.match.params.query;
        if(this.state.query !== query) {
            console.log("prev: "+this.state.query+"query:"+query);
            this.performSearch(query);
        }
    }

    componentDidMount(){
        if(this.props.query) {
            this.performSearch(this.props.query);
        } else {
            this.performSearch(this.props.match.params.query);
        }
    }

    performSearch = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&media=photos&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({loading:true});
                setTimeout(() => {
                    this.setState({
                        query: query,
                        photos: response.data.photos.photo,
                        loading: false
                    })
                }, 150);
               
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            })
    }

    render() {
        return(
            <div className="photo-container">  
                <h2>{this.state.query}</h2>
                {(this.state.loading) ? <p>Loading...</p> : 
                <Gallery data={this.state.photos} /> }
            </div>
        );
    }
    
    
    
}

export default Container;
