import './App.css';
import Invite from './pages/Invite';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/convite" element={<Invite />} />
    </Routes>
  );
}

export default App;
