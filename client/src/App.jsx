
import Navbar from './components/navbar';
import FlightBooking from './components/FlightBooking';
import SearchFlight from './SearchFlight';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Addons from './Addons';
import Deals from './Deals';
import Giftcard from './Giftcard';
import Spiceclub from './Spiceclub';
import Spicescreen from './Spicescreen';
import Cargo from './Cargo';
import Charter from './Charter';
import Travelpolicies from './Travelpolicies';
import Signup from "./Signup";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<FlightBooking />} />
        <Route path="/search-flight" element={<SearchFlight />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Addons' element={<Addons/>}/>
      <Route path='/Deals' element={<Deals/>}/>
<Route path ='/Giftcard' element={<Giftcard/>}/>
<Route path ='/Spiceclub' element={<Spiceclub/>}/>
   <Route path ='/Spicescreen' element={<Spicescreen/>}/>  
   <Route path ='/Cargo' element={<Cargo/>}/>  
     <Route path ='/Charter' element={<Charter/>}/>  
         <Route path="/travel-policies" element={<Travelpolicies />} /> 
        <Route path="/signup" element={<Signup />} /> 
     </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
