import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/blogs?populate=*');
      const data = res.data.data;
      setBlogs(data);
      setBlogsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const addBlog = async (blog) => {
    try {
      const res = await axios.post('http://localhost:1337/api/blogs', {
        data: {
          ...blog,
          author: 1,
        },
      });

      console.log(res.data);

      setBlogs([...blogs, res.data.data]);
      navigate('/blogs');
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:1337/api/blogs/${id}`);
      const blogsAfterDelete = blogs.filter((blog) => blog.id !== id);
      setBlogs(blogsAfterDelete);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    blogs,
    blogsLoaded,
    addBlog,
    deleteBlog,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
