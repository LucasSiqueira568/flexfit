import Header from './pages/Header'
import Subheader from './pages/Subheader'
import Banner from './pages/BannerPicture'
import Cards from './pages/CardCategory'
import './App.scss';

function App() {
  return (
    <div className="App">
     <Header />
     <Subheader />
     <Banner />
     <Cards />
    </div>
  );
}

export default App;
