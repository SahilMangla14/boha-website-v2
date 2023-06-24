import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from './components/Slider';
import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About'
import Message from './components/Message';
import Hostel from './components/Hostel';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Footer from './components/Footer';
import { background_img } from './assets';
function App() {
  return (
    <div className="App">
      <div className='bg-black'>
        <Topbar />
        <div className='fixed top-0'>
        <img src={background_img} alt="" className='h-[100vh] w-[100vw] sticky top-0 opacity-[0.7]' />
        </div>
        <Home />
        <About />
        <Message />
        <Hostel />
        <Events />
        <Gallery />
        <Footer />
      </div>

    </div>
  );
}

export default App;
