import { BrowserRouter as BwRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { Favorites } from './pages/Favorites';
import { Login } from "./pages/Login";
import { Products } from './pages/Products';
import { Register } from './pages/Register';

function App() {
  return (
    <BwRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppProvider >
    </BwRouter>
  );
}

export default App;
