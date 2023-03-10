import './App.css';
import Home from './components/Home';
import Aboutus from './components/About/aboutus/Aboutus'
import Message from './components/About/message/Message'
import Academics from './components/Academics/Academics'
import Alumni from './components/Alumni/Alumni'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Department from './components/Department/Department'
import Lms from './components/Lms/Lms'
import Login from './components/Login/Login'
import Qec from './components/Qec/Qec'
import Research from './components/Research/Research'
import Admission from './components/Admission/Admission'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Topheader from './components/Home/topHeader/Topheader';

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/message" element={<Message/>} />
       
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/lms" element={<Lms/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/alumni" element={<Alumni/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/oric" element={<Research/>} />
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
