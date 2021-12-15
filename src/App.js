import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
