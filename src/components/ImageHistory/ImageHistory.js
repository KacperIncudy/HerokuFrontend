import React from 'react';
	
  const ImageHistory = ({ images }) => {
    return(
     <div className="ma3">
     {images.map(image => <img className='pa1' style={{display: "block", marginLeft: "auto", marginRight: "auto"}} key={image.date} alt='' src={image.imageurl} width='500px' heigh='auto'/>)}
     </div>
    );
  }

export default ImageHistory;