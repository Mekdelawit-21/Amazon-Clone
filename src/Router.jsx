import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Langing from './pages/Langing/Langing';
import SignIn from './pages/Auth/Signup';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Results from './pages/Results/Results';

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Langing />} />
//         <Route path="/auth" element={<SignIn/>} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/category/:categoryName" element={<Results/>} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Routing

function Routing() {
  return (
    <Router
      future={{
        v7_startTransition: true, // Added future flags for React Router v7
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Langing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/cart" element={<Cart />} />

       
      </Routes>
    </Router>
  );
}

export default Routing;