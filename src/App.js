import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import './styles/App.css';
import './styles/NavBar.css';
import userIcon from './icons/icons8_male_user_100px_1.png';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="nav-bar-left-content">
          <ul className="nav-menu">
            <li><Link to="/" className="logo link">Bookstore CMS</Link></li>
            <li className="list-book-item"><Link to="/" className="books link">BOOKS</Link></li>
            <li className="list-category-item"><Link to="/categories" className="categories link">CATEGORIES</Link></li>
          </ul>
        </div>
        <div className="nav-bar-right-content oval">
          <img src={userIcon} alt="user icon" className="icon" />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
