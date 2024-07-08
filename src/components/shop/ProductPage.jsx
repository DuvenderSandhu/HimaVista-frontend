import React from 'react';
import { Card, Row, Col, Avatar, Rate, Button, List, Tooltip } from 'antd';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';
import moment from 'moment';

const { Meta } = Card;

const ProductPage = ({ product, comments }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={10}>
          <Card
            hoverable
            cover={<img alt={product.title} src={product.image} />}
          >
            <Meta
              title={product.title}
              description={product.description}
            />
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <Rate disabled defaultValue={product.rating} />
            <Button type="primary" className="w-full mt-2">Add to Cart</Button>
          </Card>
        </Col>
        <Col span={14}>
          <Card title="Comments">
            <List
              className="comment-list"
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={item => (
                <li>
                  <Comment
                    author={item.author}
                    avatar={<Avatar src={item.avatar} alt={item.author} />}
                    content={item.content}
                    datetime={
                      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(item.datetime).fromNow()}</span>
                      </Tooltip>
                    }
                    actions={[
                      <span key="comment-basic-like">
                        <Tooltip title="Like">
                          <span onClick={() => item.onLike(item.id)}>
                            {React.createElement(item.liked ? LikeFilled : LikeOutlined)}
                            <span className="comment-action">{item.likes}</span>
                          </span>
                        </Tooltip>
                      </span>,
                    ]}
                  />
                </li>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
