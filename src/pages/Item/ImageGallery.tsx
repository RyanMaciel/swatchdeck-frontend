import React from 'react';

type ImageGalleryProps = {
    imageNames: any[], 
}

  
const ImageGallery = ({imageNames}:ImageGalleryProps) => {
    return(
        <img src={imageNames[0]}/>
    )
}

export default ImageGallery;