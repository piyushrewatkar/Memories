import './App.css';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Forms/Form';
import makeStyles from './styles';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getPosts} from './actions/posts'
//import { fetchPosts } from './api/service.js';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = makeStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  
  return (
    <Container maxWidth="lg">
      <AppBar className = {classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7} >
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
