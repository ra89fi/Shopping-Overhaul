import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Dashboard from './components/Dashboard';
import Blogs from './components/Blogs';
import About from './components/About';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/reviews">Reviews</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/reviews" element={<Reviews></Reviews>} />
                    <Route
                        path="/dashboard"
                        element={<Dashboard></Dashboard>}
                    />
                    <Route path="/blogs" element={<Blogs></Blogs>} />
                    <Route path="/about" element={<About></About>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
