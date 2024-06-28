import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import TvShows from './components/TvShows'; 
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App" >
      <MyNavbar />
      <TvShows />
      <MyFooter/>
    </div>
  );
}

export default App;
