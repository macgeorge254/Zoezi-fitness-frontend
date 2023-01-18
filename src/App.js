//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ScrollButton from './components/ScrollButton';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserProvider from './Dashboards/auth';
import Products from './components/Products';
import Trainers from './components/Trainer';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Testimonialss from './components/Testimonialss';
import Dashboard from './Dashboards/Dashboard';
import UserDashboard from './Dashboards/UserDashboard';
import AddProduct from './Dashboards/AddProduct';
import AddUser from './Dashboards/AddUser';
import AddTrainer from './Dashboards/AddTrainer';
import AddOrder from './Dashboards/AddOrder';
import AllUsers from './Dashboards/AllUsers';
import AllTrainers from './Dashboards/AllTrainers';
import AllProducts from './Dashboards/AllProducts';
import AllOrders from './Dashboards/AllOrders';
import { ToastContainer } from 'react-toastify';

function App() {
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/clients')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    fetch('/trainers')
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("/orders")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrders(data);
  //     });
  // }, []);

  function addUser(newUser) {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
  }

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ScrollButton></ScrollButton>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Products" element={<Products />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Login" element={<Login setUser={setUser} />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Trainers" element={<Trainers />} />
            <Route exact path="/Testimonialss" element={<Testimonialss />} />
            <Route exact path="/Dashboard" element={<Dashboard users={users} trainers={trainers} />} />
            <Route exact path="/UserDashboard" element={<UserDashboard />} />
            <Route exact path="/AddProduct" element={<AddProduct />} />
            <Route exact path="/AddUser" element={<AddUser addUser={addUser} />} />
            <Route exact path="/AddTrainer" element={<AddTrainer />} />
            <Route exact path="/AddOrder" element={<AddOrder />} />
            <Route exact path="/AllUsers" element={<AllUsers users={users} />} />
            <Route exact path="/AllTrainers" element={<AllTrainers trainers={trainers} />} />
            <Route exact path="/AllProducts" element={<AllProducts products={products} />} />
            <Route exact path="/AllOrders" element={<AllOrders orders={orders} />} />
          </Routes>
          <ToastContainer />
          {/* <div style={{overflowY:"scroll", height:"800px"}}></div>  */}
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
