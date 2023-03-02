
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello! lets build Disney + Clone </h2> */}
      <Router>
        <Routes>
          {/* <Route exact path="/" /> */}
          <Route exact path="/" element={<Login />}>
            Login
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
