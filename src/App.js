import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { PurchasePage } from './PurchasePage.js';
import { Home } from './Home.js';
import { AppBar } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
