import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App'
import Login from './components/Login'
import Hello from './components/Hello'
import Car from './components/Car'
import NoPage from './components/NoPage';
import Category from './components/Category';
export default function router() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/category-product" element={<Category />} />
                <Route path="/car" element={<Car />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </Router>
    )
}
