import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponents/Home';

function App() {
  return (
    <section className="bg-[#ECFEFF]">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Home />} />
        <Route path="/reviews" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
