import './App.css';
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Product Listing Componets</h1>} />
          <Route path="/add" element={<h1>Add Product Componets</h1>} />
          <Route path="/update" element={<h1>Update Product Componets</h1>} />
          <Route path="/logout" element={<h1>Logout Product</h1>} />
          <Route path="/profile" element={<h1>Product Profile</h1>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;