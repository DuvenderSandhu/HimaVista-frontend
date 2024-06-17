import React from 'react';
import { Image } from 'antd';
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/hp.png'

const Images= [image1,image2,image3,image4,image5]

const ImageDisplay = () => (
  <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    {Images.map((image)=>{
        return <Image width={200} src={image} />
    })}
    
  </Image.PreviewGroup>
);
export default ImageDisplay;