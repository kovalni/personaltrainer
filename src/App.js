import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Calendar from './components/Calendar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

function App() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#16448c", color: "white"}}>
        <Toolbar>
          <div class="toolbar">
          <Typography variant="h4" className={classes.title}>
            <div class="title">
            Personal Trainer - customers and trainings
            </div>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Router>
        <div class="menu">
          <Button size="large" color="primary" component={Link} to="/" style={{fontFamily: 'Merriweather Sans'}}>
            Customers
          </Button>
          <Button size="large" color="primary" component={Link} to="/trainings" style={{fontFamily: 'Merriweather Sans'}}>
            Trainings
          </Button>
          <Button size="large" color="primary" component={Link} to="/calendar" style={{fontFamily: 'Merriweather Sans'}}>
            Calendar
          </Button>
          <Switch>
            <Route exact path="/" component={Customerlist} />
            <Route path="/trainings" component={Traininglist} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;