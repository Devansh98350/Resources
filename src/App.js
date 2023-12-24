import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
// About
import Amain from "./components/Exams/JEE-Main/Main";
import Aadvanced from "./components/Exams/JEE-Advanced/Advanced";
import Aneet from "./components/Exams/NEET/Neet";
import Akvpy from "./components/Exams/KVPY/Kvpy";
import Antse from "./components/Exams/NTSE/Ntse";
// PYQ
import PYmain from "./components/P_year/JEE-Main/Main";
import PYadvanced from "./components/P_year/JEE-Advanced/Advanced";
import PYneet from "./components/P_year/NEET/Neet";
import PYcbse from "./components/P_year/CBSE/cbse";
import PYkvpy from "./components/P_year/KVPY/Kvpy";
import PYntse from "./components/P_year/NTSE/Ntse";
// PYQ
import Smain from "./components/Syllabus/JEE-Main/Main";
import Sadvanced from "./components/Syllabus/JEE-Advanced/Advanced";
import Sneet from "./components/Syllabus/NEET/Neet";
import Scbse from "./components/Syllabus/CBSE/cbse";
import Skvpy from "./components/Syllabus/KVPY/Kvpy";
import Sntse from "./components/Syllabus/NTSE/Ntse";
// import Contact from "./components/Contact_Us/Contact";
import PagenotFound from "./components/PagenotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        {/* EXAM */}
        <Route path="/exam-jee-main-iit-academy" element={<Amain />} />
        <Route path="/exam-jee-advanced-iit-academy" element={<Aadvanced />} />
        <Route path="/exam-neet-iit-academy" element={<Aneet />} />
        <Route path="/exam-kvpy-iit-academy" element={<Akvpy />} />
        <Route path="/exam-ntse-iit-academy" element={<Antse />} />
        {/* PYQ */}
        <Route path="/pyq-jee-main-iit-academy" element={<PYmain />} />
        <Route path="/pyq-jee-advanced-iit-academy" element={<PYadvanced />} />
        <Route path="/pyq-neet-iit-academy" element={<PYneet />} />
        <Route path="/pyq-cbse-boards-iit-academy" element={<PYcbse />} />
        <Route path="/pyq-kvpy-iit-academy" element={<PYkvpy />} />
        <Route path="/pyq-ntse-iit-academy" element={<PYntse />} />
        {/* SYLLABUS */}
        <Route path="/syllabus-jee-main-iit-academy" element={<Smain />} />
        <Route
          path="/syllabus-jee-advanced-iit-academy"
          element={<Sadvanced />}
        />
        <Route path="/syllabus-neet-iit-academy" element={<Sneet />} />
        <Route path="/syllabus-cbse-boards-iit-academy" element={<Scbse />} />
        <Route path="/syllabus-kvpy-iit-academy" element={<Skvpy />} />
        <Route path="/syllabus-ntse-iit-academy" element={<Sntse />} />
        {/* Others */}
        {/* <Route path="/contact-us-iit-academy" element={<Contact />} /> */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
