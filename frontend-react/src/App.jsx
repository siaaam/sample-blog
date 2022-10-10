import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './pages/Blogs';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </>
  );
}

export default App;
