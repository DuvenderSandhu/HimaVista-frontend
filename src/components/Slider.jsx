import React from 'react';
import First from '../assets/1.jpg'
import Second from '../assets/2.jpg'
import Third from '../assets/3.jpg'
import Fourth from '../assets/4.jpg'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Carousel } from 'antd';
const contentStyle = {
  margin: '0px',
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => (
  <>
    <Carousel arrows infinite autoplay autoplaySpeed="3000">
      <div>
        <h3 style={contentStyle} ><img src={First} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}> <img src={Second} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={Third} alt="" /></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={Fourth} alt="" /></h3>
      </div>
    </Carousel>
  </>
);
export default Slider;