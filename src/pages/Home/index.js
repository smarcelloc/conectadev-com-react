import Header from './components/Header';
import { makeStyles } from "@material-ui/styles";
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import { Container } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  main: {
    marginTop: 64,
    display: 'flex',
    padding: theme.spacing(3)
  }

}));


function Home() {

  const classes = useStyle();


  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg" role="main" className={classes.main}>
        <Navbar />
        <Feed />
      </Container>
    </div>
  );
}

export default Home;