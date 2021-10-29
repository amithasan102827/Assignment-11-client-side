import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 ">
                <Link className="text-decoration-none" to="/home">Home</Link>
              </li>

              <li className="nav-item mx-2 ">
                <Link className="text-decoration-none" to="/AddNewService">Add new service</Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link className="text-decoration-none" to="/myOrders">MyOrders</Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link className="text-decoration-none" to="/ManageAllOrders">ManageAllOrders</Link>
              </li>

              {
                !user.email && <li className="nav-item mx-2 ">
                  <Link className="text-decoration-none" to="/login">Login</Link>
                </li>
              }






            </ul>
            {
              user.email && <span className=" me-4 text-danger">welcome {user.email}</span>
            }
            {
              user.email && <Button onClick={logOut} className='btn btn-danger' variant="outline-success">Logout</Button>
            }

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;