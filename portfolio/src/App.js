import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <div>
      <Router>
       <Header/>
       <Route exact path = "/" component = {HomePage}/>
       <Route exact path = "/portfolio" component = {PortfolioPage}/>


       <Footer/>
      </Router>
    </div>
  );
}

export default App;
