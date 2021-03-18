import { Route, Switch } from 'react-router-dom' // Switch mach die erste ricgitge path funktionieren zu lassen
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nv from './components/404'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/about" component={About} /> {/* Route 2. syntax */}
        {/* <Route path="/about" component={(props)=> <About props={...props}/>} /> */} {/* Route 2. syntax mit props*/}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Nv />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
