import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Auth/Login/Login';
import SignUP from './Pages/Auth/SignUp/SignUp';
import Home from './Pages/HomeComponents/Home';
import Error404 from './Pages/Shared/Error404';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <section style={{ maxWidth: '1800px' }} className="bg-[#ECFEFF] mx-auto">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <Toaster />
    </section>
  );
}

export default App;
