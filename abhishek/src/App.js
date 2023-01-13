// import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const link="http://www.google.com";
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;
