import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blogs, blogsLoaded }) => {
  const navigate = useNavigate();

  console.log(blogs);

  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Card style={{ width: '18rem' }} className="mb-4">
            <Card.Img
              variant="top"
              src={
                blogsLoaded
                  ? `http://localhost:1337${blog?.attributes?.image?.data?.attributes?.url}`
                  : ''
              }
            />
            <Card.Body>
              <Card.Title>{blog.attributes.title}</Card.Title>
              <Card.Text>{blog.attributes.description}</Card.Text>
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
