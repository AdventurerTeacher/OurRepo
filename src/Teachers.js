import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route } from "react-router-dom"

export default function Teachers() { 
  
    return(
        <div align = 'center' >
          {/* <Link  href="/LoginS"  color="inherit">SignIn</Link> 
          <br></br>
          <Link  href="/SignUpS"  color="inherit">SignUp</Link> */}
        <br></br>
        <br></br>
          <Button variant="contained" color="primary" href="/SignupT" alignItems = 'center' >
          Sign Up
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" href="/LoginT">
        Sign In 
        </Button>
        </div>
    )
}