import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = props => {
    const results = props.data;
    let photos;
    if(results.length) {
        photos = results.map(photo => <Photo 
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} 
            key={photo.id} />
        );
    } else {
        photos = <NoPhotos />
    }
    return(
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
    );
}

export default PhotoList;