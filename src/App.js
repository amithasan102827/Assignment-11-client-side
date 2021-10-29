import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewService from './components/AddNewService/AddNewService';
import Footer from './components/Footer/Footer';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
    <BrowserRouter>
    <Header></Header>
      <Switch>
     <Route exact path="/">
       <Home></Home>
     </Route>
     <Route path="/home">
       <Home></Home>
     </Route>
     <Route path="/login">
       <Login></Login>
     </Route>
     <PrivateRoute path="/serviceDetails/:detailsId">
       <ServiceDetails></ServiceDetails>
     </PrivateRoute>
     <PrivateRoute path="/AddNewService">
       <AddNewService></AddNewService>
     </PrivateRoute>
     <PrivateRoute path="/ManageAllOrders">
       <ManageAllOrders></ManageAllOrders>
     </PrivateRoute>
     <PrivateRoute path="/myOrders">
      <MyOrders></MyOrders>
     </PrivateRoute>
   
      
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
