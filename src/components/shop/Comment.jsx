import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductPage from './ProductPage';
import 'antd/dist/antd.css';

const Comment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: <p>This is a great product!</p>,
      datetime: '2023-07-01',
      likes: 5,
      liked: false,
      onLike: handleLike,
      content: <p>Highly recommend this product.</p>,
      datetime: '2023-07-02',
      likes: 3,
      liked: false,
      onLike: handleLike,
    },
  ]);

  const product = {
    image: 'https://example.com/product.jpg', // Replace with a valid image URL
    title: 'Sample Product',
    description: 'This is a sample product description. It provides information about the product features and benefits.',
    price: 49.99,
    rating: 4,
    category: 'Electronics',
    brand: 'BrandName',
  };

  function handleLike(commentId) {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked }
          : comment
      )
    );
  }},
    {
      id: 2,
      author: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    

export default Comment
