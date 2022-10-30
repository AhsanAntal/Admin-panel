import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Components/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/pages/UserList/UserList";
import User from "./Components/pages/User/User";
import NewUser from "./Components/pages/newUser/NewUser";
import ProductList from "./Components/pages/productList/ProductList";
import Product from "./Components/pages/products/Product";
import NewProduct from "./Components/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Products/:id" element={<Product />} />
          <Route path="/newProducts" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
