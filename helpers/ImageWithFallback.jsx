import React, { useState,useEffect } from 'react';


const ImageWithFallback = ({ src, fallbackSrc, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImgSrc(src);
        };
        img.onerror = () => {
          setImgSrc(fallbackSrc);
        };
      }, [src, fallbackSrc]);
    
      return <img src={imgSrc} {...rest} />;
   
    
};

export default ImageWithFallback;