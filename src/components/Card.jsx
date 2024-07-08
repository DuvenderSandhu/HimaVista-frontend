import React from 'react';
import { Avatar, Card, Rate, Button } from 'antd';
const { Meta } = Card;

function CardLayout({ Imageurl, title, desc, price, rating, category, brand, stock }) {
  return (
    <Card
      hoverable
      className="w-96 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
      cover={
        <img
          className="w-full h-52 object-cover"
          alt={title}
          src={Imageurl}
        />
      }
      bordered
    >
      <Meta
        avatar={<Avatar src={Imageurl} />}
        title={title}
        description={
          <>
            <p className="text-gray-700 mb-2">{desc.length < 100 ? desc : desc.slice(0, 100) + "..."}</p>
            <p className="text-gray-500 mb-1"><strong>Category:</strong> {category}</p>
            <p className="text-gray-500 mb-1"><strong>Brand:</strong> {brand}</p>
            <p className="text-gray-900 font-bold mb-2"><strong>Price:</strong> ${price}</p>
            <p className="text-gray-500 mb-1"><strong>Stock:</strong> {stock ? 'In Stock' : 'Out of Stock'}</p>
            <Rate disabled defaultValue={4} className="mb-2" />
            <Button type="primary" className="w-full mb-2">Add to Cart</Button>
            <Button type="default" className="w-full">View Details</Button>
          </>
        }
      />
    </Card>
  );
}

export default CardLayout;
