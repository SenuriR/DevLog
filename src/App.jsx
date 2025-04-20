import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
  );
}

export default App;