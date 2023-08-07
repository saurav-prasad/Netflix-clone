import { useState } from 'react';
import './App.css';
import './App.css'
import Banner from './components/banner/Banner';
import Nav from './components/nav/Nav';
import Row from './components/rows/Row';
import requests from './requests';
import Alrt from './components/alrt/Alrt';
import Footer from './components/footer/Footer';

function App() {
  console.log(process.env);
  const [alert, setAlert] = useState(null);
  const showAlert = (data) => {
    setAlert(data)
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  return (
    <div className='App'>
      <Alrt showAlert={alert} />
      <Nav />
      <Banner showAlert={showAlert}/>
      <Row showAlert={showAlert} isLargeRow={true} title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row showAlert={showAlert} title='Trending Now' fetchUrl={requests.fetchNetflixOriginals} />
      <Row showAlert={showAlert} title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row showAlert={showAlert} title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row showAlert={showAlert} title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row showAlert={showAlert} title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row showAlert={showAlert} title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row showAlert={showAlert} title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
