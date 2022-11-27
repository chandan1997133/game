import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './Components/MainPage';
import SpinWheel from './Components/SpinWheel';
import Winner from './Components/Winner';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}> </Route>
        <Route path="/spinwheel" element={<SpinWheel />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
