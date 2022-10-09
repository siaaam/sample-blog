import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
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

  const addBlog = async (data) => {
    try {
      const res = await axios.post('http://localhost:1337/api/blogs', {
        data: {
          ...data,
        },
      });

      console.log(res.data);

      setBlogs([...blogs, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    blogs,
    blogsLoaded,
    addBlog,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
