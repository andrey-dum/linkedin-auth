import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import { LinkedIn } from 'react-linkedin-login-oauth2';


import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { Route } from 'react-router-dom';


function App() {
  
  const [user, setUser] = useState(null);


  const getToken = async (data) => {
    const res = await axios.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${data.code}&redirect_uri=https%3A%2F%2Flinkedin-auth-5c02d.web.app&client_id=${client_id}&client_secret=${client_secret}`,
      {},
     {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
    console.log(res);
    // https://api.linkedin.com/v2/me
  }




  const handleSuccess = (data) => {
    // alert(
    //   `Logged in successfully!`
    // );
    getToken(data)
    
  }
  
  console.log(user);
  const handleFailure = (error) => {
    alert(
      `Failed to login. ${error}`
    );
  }

 
  return (
    <div>
      <Route exact path="/" component={LinkedInPopUp}  />
        <LinkedIn
            clientId={clientId}
            onFailure={handleFailure}
            onSuccess={handleSuccess}
            redirectUri="https://linkedin-auth-5c02d.web.app"
            >ВХОД
            </LinkedIn>
            
    </div>
  );
}

export default App;
