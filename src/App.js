import './App.css';
import Filosofi from './components/Filosofi/Filosofi';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="Section">
        <Filosofi />
      </div>
    </div>
  );
}
