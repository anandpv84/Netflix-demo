import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { requests } from './request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movie' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movie' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>


  );
}

export default App;
