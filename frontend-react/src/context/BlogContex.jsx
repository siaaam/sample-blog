import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/blogs?populate=*');
      const data = res.data.data;
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    blogs,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
