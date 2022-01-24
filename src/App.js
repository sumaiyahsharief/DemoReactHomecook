import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Contact } from './components/Pages/Contact';
import { Blog } from './components/Pages/Blog';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className='pages'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
     <footer>
     <p>&copy; 2022 homecook.com</p>
     </footer>
    </>
  );
}

export default App;
