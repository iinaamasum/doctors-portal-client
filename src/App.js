import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeComponents/Home';
import Error404 from './Pages/Shared/Error404';
import Footer from './Pages/Shared/Footer';

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
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
