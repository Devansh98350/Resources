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
//Mains Year Wise Pages
import Main2017 from "./components/P_year/JEE-Main/mainContent/MainContent_2017";
import Main2018 from "./components/P_year/JEE-Main/mainContent/MainContent_2018";
import Main2019 from "./components/P_year/JEE-Main/mainContent/MainContent_2019";
import Main2020 from "./components/P_year/JEE-Main/mainContent/MainContent_2020";
import Main2021 from "./components/P_year/JEE-Main/mainContent/MainContent_2021";
import Main2022 from "./components/P_year/JEE-Main/mainContent/MainContent_2022";
import Main2023 from "./components/P_year/JEE-Main/mainContent/MainContent_2023";
// Advance Year Wise Pages
import Adv2017 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2017";
import Adv2018 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2018";
import Adv2019 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2019";
import Adv2020 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2020";
import Adv2021 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2021";
import Adv2022 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2022";
import Adv2023 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2023";
//NEET Year Wise Pages
import Neet2017 from "./components/P_year/NEET/neetContent/NeetContent_2017";
import Neet2018 from "./components/P_year/NEET/neetContent/NeetContent_2018";
import Neet2019 from "./components/P_year/NEET/neetContent/NeetContent_2019";
import Neet2020 from "./components/P_year/NEET/neetContent/NeetContent_2020";
import Neet2021 from "./components/P_year/NEET/neetContent/NeetContent_2021";
import Neet2022 from "./components/P_year/NEET/neetContent/NeetContent_2022";
import Neet2023 from "./components/P_year/NEET/neetContent/NeetContent_2023";
//CBSE Year Wise Pages
import Cbse2017 from "./components/P_year/CBSE/CbseContent/CbseContent_2017";
import Cbse2018 from "./components/P_year/CBSE/CbseContent/CbseContent_2018";
import Cbse2019 from "./components/P_year/CBSE/CbseContent/CbseContent_2019";
import Cbse2020 from "./components/P_year/CBSE/CbseContent/CbseContent_2020";
import Cbse2021 from "./components/P_year/CBSE/CbseContent/CbseContent_2021";
import Cbse2022 from "./components/P_year/CBSE/CbseContent/CbseContent_2022";
import Cbse2023 from "./components/P_year/CBSE/CbseContent/CbseContent_2023";
//NCERT Books Pages
import Ncert from "./components/Books/NCERT/Ncert";
import Ncert6 from "./components/Books/NCERT/NcertContent/Ncert06";
import Ncert7 from "./components/Books/NCERT/NcertContent/Ncert07";
import Ncert8 from "./components/Books/NCERT/NcertContent/Ncert08";
import Ncert9 from "./components/Books/NCERT/NcertContent/Ncert09";
import Ncert10 from "./components/Books/NCERT/NcertContent/Ncert10";
import Ncert11 from "./components/Books/NCERT/NcertContent/Ncert11";
import Ncert12 from "./components/Books/NCERT/NcertContent/Ncert12";
//Other Book Pages
import JeeB from "./components/Books/IIT/Jee";
import NeetB from "./components/Books/NEET/Neet";
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
        {/* NCERT Books Page */}
        <Route path="/ncert-books-iit-academy" element={<Ncert />} />
        <Route path="/ncert-class-6-books-iit-academy" element={<Ncert6 />} />
        <Route path="/ncert-class-7-books-iit-academy" element={<Ncert7 />} />
        <Route path="/ncert-class-8-books-iit-academy" element={<Ncert8 />} />
        <Route path="/ncert-class-9-books-iit-academy" element={<Ncert9 />} />
        <Route path="/ncert-class-10-books-iit-academy" element={<Ncert10 />} />
        <Route path="/ncert-class-11-books-iit-academy" element={<Ncert11 />} />
        <Route path="/ncert-class-12-books-iit-academy" element={<Ncert12 />} />
        {/* Other Books Pages */}
        <Route
          path="/jee(mains+advanced)-books-iit-academy"
          element={<JeeB />}
        />
        <Route path="/neet-books-iit-academy" element={<NeetB />} />
        {/* Mains Year Wise Pages */}
        <Route path="/pyq-2017-jee-main-iit-academy" element={<Main2017 />} />
        <Route path="/pyq-2018-jee-main-iit-academy" element={<Main2018 />} />
        <Route path="/pyq-2019-jee-main-iit-academy" element={<Main2019 />} />
        <Route path="/pyq-2020-jee-main-iit-academy" element={<Main2020 />} />
        <Route path="/pyq-2021-jee-main-iit-academy" element={<Main2021 />} />
        <Route path="/pyq-2022-jee-main-iit-academy" element={<Main2022 />} />
        <Route path="/pyq-2023-jee-main-iit-academy" element={<Main2023 />} />
        {/* Advance Year Wise Pages */}
        <Route
          path="/pyq-2017-jee-advanced-iit-academy"
          element={<Adv2017 />}
        />
        <Route
          path="/pyq-2018-jee-advanced-iit-academy"
          element={<Adv2018 />}
        />
        <Route
          path="/pyq-2019-jee-advanced-iit-academy"
          element={<Adv2019 />}
        />
        <Route
          path="/pyq-2020-jee-advanced-iit-academy"
          element={<Adv2020 />}
        />
        <Route
          path="/pyq-2021-jee-advanced-iit-academy"
          element={<Adv2021 />}
        />
        <Route
          path="/pyq-2022-jee-advanced-iit-academy"
          element={<Adv2022 />}
        />
        <Route
          path="/pyq-2023-jee-advanced-iit-academy"
          element={<Adv2023 />}
        />
        {/* Neet Year Wise Pages */}
        <Route path="/pyq-2017-neet-iit-academy" element={<Neet2017 />} />
        <Route path="/pyq-2018-neet-iit-academy" element={<Neet2018 />} />
        <Route path="/pyq-2019-neet-iit-academy" element={<Neet2019 />} />
        <Route path="/pyq-2020-neet-iit-academy" element={<Neet2020 />} />
        <Route path="/pyq-2021-neet-iit-academy" element={<Neet2021 />} />
        <Route path="/pyq-2022-neet-iit-academy" element={<Neet2022 />} />
        <Route path="/pyq-2023-neet-iit-academy" element={<Neet2023 />} />
        {/* CBSE Year Wise Pages */}
        <Route
          path="/pyq-2017-cbse-boards-iit-academy"
          element={<Cbse2017 />}
        />
        <Route
          path="/pyq-2018-cbse-boards-iit-academy"
          element={<Cbse2018 />}
        />
        <Route
          path="/pyq-2019-cbse-boards-iit-academy"
          element={<Cbse2019 />}
        />
        <Route
          path="/pyq-2020-cbse-boards-iit-academy"
          element={<Cbse2020 />}
        />
        <Route
          path="/pyq-2021-cbse-boards-iit-academy"
          element={<Cbse2021 />}
        />
        <Route
          path="/pyq-2022-cbse-boards-iit-academy"
          element={<Cbse2022 />}
        />
        <Route
          path="/pyq-2023-cbse-boards-iit-academy"
          element={<Cbse2023 />}
        />
        {/* Others */}
        {/* <Route path="/contact-us-iit-academy" element={<Contact />} /> */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
