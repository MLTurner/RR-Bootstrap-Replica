import './App.css';
import TopBar from './components/TopBar'
import MainPhoto from './components/MainPhoto'
import StoreListings from './components/StoreListings';

function App() {
    return (
      <div className="App">
        <TopBar />
        <MainPhoto />
        <StoreListings />
      </div>
  );
}

export default App;
