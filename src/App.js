import './App.css';
import Home from './components/Home';
import Aboutus from './components/About/aboutus/Aboutus'
import Message from './components/About/message/Message'
import Rector from './components/About/Rector/Rector'

import Academics from './components/Academics/Academics'
import Alumni from './components/Alumni/Alumni'
import MobileAppdevelopement from './components/Certificates/MobileAppdevelopement'
import Pythoncourse from './components/Certificates/Pythoncourse'
import Blockchain from './components/Certificates/Blockchain'
import PenetrationTesting from './components/Certificates/PenetrationTesting'
import EthicalHacking from './components/Certificates/EthicalHacking'
import NetDevelopment from './components/Certificates/NetDevelopment'


import Contact from './components/Contact/Contact'
import Lms from './components/Lms/Lms'
import Login from './components/Login/Login'
import Qec from './components/Qec/Qec'
import FinalMsg from './components/Qec/FinalMsg'

import Research from './components/Research/Research'
import FeeStructure from './components/Admission/feeStructure/FeeStructure';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Topheader from './components/Home/topHeader/Topheader';
import Eligibility from './components/Admission/eligibility/Eligibility';
import Scholarship from './components/Admission/scholarship/Scholarship'
import Oric from './components/Research/ORIC/Oric';
// import Researchgrands from './components/Research/ORIC/Research Grands/Researchgrands ';
import Researchgrands1 from './components/Research/ORIC/Research Grands/Researchgrands1';
import Researchgrands2 from './components/Research/ORIC/Research Grands/Researchgrands2';
import Researchgrands3 from './components/Research/ORIC/Research Grands/Researchgrands3';
import Researchgrands4 from './components/Research/ORIC/Research Grands/Researchgrands4';
import AdmissionPolicy from './components/Admission/admissionpolicy/AdmissionPolicy';
import Mba from './components/Department/masterbusinessadministration/Mba';
import Cs from './components/Department/bachleorComputerScience/Cs';
import Bba from './components/Department/bachelorBusinessAdministration/Bba';

function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/message" element={<Message/>} />
        <Route path="/rectormessages" element={<Rector/>} />
        <Route path="/intro" element={<Qec/>} />
        <Route path="/finalmessage" element={<FinalMsg/>} />
        <Route path="/mba" element={<Mba/>}/>
        <Route path='/cs' element={<Cs/>}/>
        <Route path='/Bba' element={<Bba/>}/>

       <Route path='/feestructure' element={<FeeStructure/>}/>
       <Route path='/eligibility' element={<Eligibility/>}/>
       <Route path= '/admissionpolicy' element={<AdmissionPolicy/>}/>

        <Route path="/mobileappdevelopement" element={<MobileAppdevelopement/>} />
        <Route path="/pythoncourse" element={<Pythoncourse/>} />
        <Route path="/blockchain" element={<Blockchain/>} />
        <Route path="/penetrationtesting" element={<PenetrationTesting/>} />
        <Route path="/ethicalhacking" element={<EthicalHacking/>} />
        <Route path="/netdevelopement" element={<NetDevelopment/>} />
        {/* <Route path="/phpwebdevelopement" element={<PHPwebdevelopement/>} /> */}

        <Route path="/scholarship" element={<Scholarship/>} />
        <Route path="/lms" element={<Lms/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/alumni" element={<Alumni/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/oric" element={<Oric/>} />
        <Route path="/researchgrands1" element={<Researchgrands1/>}/>
        <Route path="/researchgrands2" element={<Researchgrands2/>}/>
        <Route path="/researchgrands3" element={<Researchgrands3/>}/>
        <Route path="/researchgrands4" element={<Researchgrands4/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
