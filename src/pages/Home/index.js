import Header from '../../components/Header';
import './style.css';

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <nav className="navbar">Sidebar</nav>
        <div className="feed">Feed</div>
      </main>
    </div>
  );
}

export default Home;