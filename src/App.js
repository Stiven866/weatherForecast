import React, { Component } from 'react';
//Import styles @Material-ui
import { Paper} from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

// Import Styles
import './App.css';

const cities = [
  "Bogota,co",
  "Medellín,co",
  "Buenos Aires,ar",
  "Madrid,ph",
  "Florencia,co",
  "Alaska,co",
]

class App extends Component {

   useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
  
  render(){  
    const classes = this.useStyles;
    return ( 
      <Grid>
        <Row>
          <Col xs={12} >
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              <ForecastExtendedContainer/>
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }  
}

export default App;
