import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export default function Students() { 

    return(
        <div align = 'center' >
          {/* <Link  href="/LoginS"  color="inherit">SignIn</Link> 
          <br></br>
          <Link  href="/SignUpS"  color="inherit">SignUp</Link> */}
        <br></br>
        <br></br>
          <Button variant="contained" color="primary" href="/SignupS" alignItems = 'center'>
          Sign Up
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained" color="primary" href="/LoginS">
        Sign In 
        </Button>
        </div>
     
    )

}