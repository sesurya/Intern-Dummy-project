// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
function App() {
  const link="http://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        
        <div className="content" >
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/create">
            <Create/>
            </Route>
            <Route path="/blogs/:id">
            <BlogDetails/>
            </Route>
          </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
