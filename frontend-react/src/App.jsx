import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs';

import Navigation from './components/Navigation';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
