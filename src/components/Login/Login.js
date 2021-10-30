import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import useAuth from '../Hooks/useAuth';
import './Login.css'

import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    initializeAuthentication()
    const location=useLocation();
  const history =useHistory();
  const redirect_url= location.state?.from || '/home'
    const {singInUsingGoogle,setIsLoading,setUser} =useAuth();
    
    const handleGoogleLogin=()=>{
        singInUsingGoogle()
        .then((result) => {
          const user = result.user;
          history.push(redirect_url);
          setUser(user);
          console.log(user);
        })
        .finally(()=>setIsLoading(false));
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} type="button" class="btn btn-warning btn-lg google-login">Google Sing In</button>
        </div>
    );
};

export default Login;