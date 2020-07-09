import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeS from './HomeS';
import LoginS from './LoginS';
import SignupS from './SignupS';
import Students from './Students';
import Teachers from './Teachers';
import HomeT from './HomeT';
import LoginT from './LoginT';
import SignupT from './SignupT';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default  function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Book Teachers
          </Typography>
          <Button color="inherit" href="/Teachers">Teacher</Button>
          <Button color="inherit" href="/Students">Student</Button>
        </Toolbar>
      </AppBar>
      <Router>
      <Route path="/Teachers" component={Teachers} /> 
      <Route path="/Students" component={Students} />
      <Route path="/SignupS" component={SignupS} />
      <Route path="/LoginS" component={LoginS} />
      <Route path="/HomeS" component={HomeS} />
      <Route path="/SignupT" component={SignupT} />
      <Route path="/LoginT" component={LoginT} />
      <Route path="/HomeT" component={HomeT} />
      </Router>
    </div>
  );
}

// export default App;
