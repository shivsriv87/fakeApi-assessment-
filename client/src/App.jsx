import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-indigo-600 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <h1 className="text-xl font-bold">FakeStore API</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/add-product" className="hover:underline">Add Product</Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
