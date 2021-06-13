import './App.css';
import Cake from './components/Cake';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className="CakeContent">
        <Cake/>
      </div>
    </div>
  );
}

export default App;
