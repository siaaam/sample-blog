import React from 'react';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContex';

import BlogCard from './BlogCard';
import Container from 'react-bootstrap/esm/Container';

const Blogs = () => {
  const { blogs, blogsLoaded } = useContext(BlogContext);

  return (
    <Container>
      <h1 className="mt-4 mb-4">All Blogs</h1>
      <div className="d-flex justify-content-between flex-wrap">
        <BlogCard blogs={blogs} blogsLoaded={blogsLoaded} />
      </div>
    </Container>
  );
};

export default Blogs;
