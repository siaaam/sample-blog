import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [blogLoaded, setBlogLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getSingleBlog();
  }, []);

  const getSingleBlog = async () => {
    try {
      const res = await axios.get(
        `http://localhost:1337/api/blogs/${id}?populate=*`
      );
      const data = res.data.data;
      //   console.log(data.attributes.author.data.attributes.username);
      setBlog(data);
      setBlogLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(blog);
  return (
    <Container>
      <h1 className="mt-4">{blogLoaded && blog.attributes.title}</h1>
      <p>
        created by:
        {blogLoaded && blog.attributes.author.data.attributes.username}
      </p>
      <img
        src={
          blogLoaded
            ? `http://localhost:1337${blog.attributes?.image?.data?.attributes?.url}`
            : ''
        }
        alt=""
        className="mb-4"
      />
      <hr />
      <h5>{blogLoaded && blog.attributes.description}</h5>
      <hr />
      <ReactMarkdown>{blogLoaded && blog.attributes.content}</ReactMarkdown>
    </Container>
  );
};

export default BlogDetails;
