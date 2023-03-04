import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello! lets build Disney + Clone </h2> */}
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" /> */}
          <Route exact path="/" element={<Login />}>
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
