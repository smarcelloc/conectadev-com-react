import Header from '../../components/Header';
import { makeStyles } from "@material-ui/styles";
import Navbar from '../../components/Navbar';
import Feed from '../../components/Feed';


const useStyle = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column'
  },

  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto'
  }

}));


function Home() {

  const classes = useStyle();


  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Navbar />
        <Feed />
      </main>
    </div>
  );
}

export default Home;