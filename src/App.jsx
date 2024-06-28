import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import TvShows from './components/TvShows'; 
import MyFooter from './components/MyFooter';
import HomeGalleries from './components/HomeGalleries';


function App() {
  return (
    <div className="App" >
      <MyNavbar />
      <TvShows />
      <HomeGalleries/>
      <MyFooter/>
    </div>
  );
}

export default App;
