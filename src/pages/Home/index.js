import Header from '../../components/Header';
import { makeStyles } from "@material-ui/styles";
import Navbar from '../../components/Navbar';
import Feed from '../../components/Feed';
import { Box, Container } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  main: {
    marginTop: 64,
    padding: 24
  }

}));


function Home() {

  const classes = useStyle();


  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="lg" role="main" className={classes.main}>
        <Box>
          <Navbar />
          <Feed />
        </Box>
      </Container>
    </div>
  );
}

export default Home;