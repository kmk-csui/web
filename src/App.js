import './App.css';
import Filosofi from './components/Filosofi/Filosofi';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Tagar from './components/Tagar/Tagar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="Section">
        <Filosofi />
        <Tagar />
      </div>
    </div>
  );
}
