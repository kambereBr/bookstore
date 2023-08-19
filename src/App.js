import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <span className="logo">Bookstore</span>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
