
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import More from './More';
import Settings from './Settings';
import Navbar from './Navbar';

function App() {
   
  
   
  return (
    <div className="App">
           
           <Navbar />

         <Switch >
           <Route path='/' exact component={Home}/>
           <Route path='/more' exact component={More}/>
           <Route path='/settings'  exact component={Settings}/>
         </Switch>

    </div>
  );
}

export default App;
