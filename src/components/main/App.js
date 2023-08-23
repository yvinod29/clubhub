import './App.css';
import HeaderComponent from '../header/HeaderComponent';
import EventList from '../event/EventList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from '../sign/SignInPage';
import ClubList from '../club/ClubList';
 import About from '../About';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent/>
     
  
    <Route path="/" exact component={EventList} />
        <Switch>
          <Route path="/clubs" exact component={ClubList}/>
           <Route path="/signin" exact component={SignInPage} />
           <Route path="/about" exact component={About}/>
      
         </Switch>
      </div>
    </Router>
  );
}

export default App;
