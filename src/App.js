import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

import Homepage from "./components/Homepage/Homepage";
import CategoryPage from "./components/Homepage/CategoryPage";
// About
// import Schedule from "./components/Exams/Schedule_2024/Schedule";
import Amain from "./components/Exams/JEE-Main/Main";
import Aadvanced from "./components/Exams/JEE-Advanced/Advanced";
import Aneet from "./components/Exams/NEET/Neet";
import Antse from "./components/Exams/NTSE/Ntse";
import Aipho from "./components/Exams/Olympiads/IPHO/IPHO";
import Aimo from "./components/Exams/Olympiads/IMO/IMO";
import Anso from "./components/Exams/Olympiads/NSO/NSO";
import Asfo from "./components/Exams/Olympiads/SFO/SFO";
import Aieo from "./components/Exams/Olympiads/IEO/IEO";
import Aigko from "./components/Exams/Olympiads/IGKO/IGKO";
import Aisso from "./components/Exams/Olympiads/ISSO/ISSO";
import Anstse from "./components/Exams/Olympiads/NSTSE/NSTSE";
// PYQ
import PYmain from "./components/P_year/JEE-Main/Main";
import PYadvanced from "./components/P_year/JEE-Advanced/Advanced";
import PYneet from "./components/P_year/NEET/Neet";
import PYcbse from "./components/P_year/CBSE/cbse";
import PYkvpy from "./components/P_year/KVPY/Kvpy";
import PYntse from "./components/P_year/NTSE/Ntse";
// Syllabus
import Smain from "./components/Syllabus/JEE-Main/Main";
import Sadvanced from "./components/Syllabus/JEE-Advanced/Advanced";
import Sneet from "./components/Syllabus/NEET/Neet";
// import Scbse from "./components/Syllabus/CBSE/cbse";
import Sntse from "./components/Syllabus/NTSE/Ntse";
//Mains Year Wise Pages
import Main2017 from "./components/P_year/JEE-Main/mainContent/MainContent_2017";
import Main2018 from "./components/P_year/JEE-Main/mainContent/MainContent_2018";
import Main2019 from "./components/P_year/JEE-Main/mainContent/MainContent_2019";
import Main2020 from "./components/P_year/JEE-Main/mainContent/MainContent_2020";
import Main2021 from "./components/P_year/JEE-Main/mainContent/MainContent_2021";
import Main2022 from "./components/P_year/JEE-Main/mainContent/MainContent_2022";
import Main2023 from "./components/P_year/JEE-Main/mainContent/MainContent_2023";
import Main2024 from "./components/P_year/JEE-Main/mainContent/MainContent_2024";
import Main2025 from "./components/P_year/JEE-Main/mainContent/MainContent_2025";
// Advance Year Wise Pages
import Adv2017 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2017";
import Adv2018 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2018";
import Adv2019 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2019";
import Adv2020 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2020";
import Adv2021 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2021";
import Adv2022 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2022";
import Adv2023 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2023";
import Adv2024 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2024";
import Adv2025 from "./components/P_year/JEE-Advanced/advContent/AdvContent_2025";
//NEET Year Wise Pages
import Neet2017 from "./components/P_year/NEET/neetContent/NeetContent_2017";
import Neet2018 from "./components/P_year/NEET/neetContent/NeetContent_2018";
import Neet2019 from "./components/P_year/NEET/neetContent/NeetContent_2019";
import Neet2020 from "./components/P_year/NEET/neetContent/NeetContent_2020";
import Neet2021 from "./components/P_year/NEET/neetContent/NeetContent_2021";
import Neet2022 from "./components/P_year/NEET/neetContent/NeetContent_2022";
import Neet2023 from "./components/P_year/NEET/neetContent/NeetContent_2023";
import Neet2024 from "./components/P_year/NEET/neetContent/NeetContent_2024";
import Neet2025 from "./components/P_year/NEET/neetContent/NeetContent_2025";
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
import FoundationB from "./components/Books/Foundation/Foundation";
import Sample from "./components/Books/CBSE_Sample/Sample";
// import Contact from "./components/Contact_Us/Contact";
// import PagenotFound from "./components/PagenotFound";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:categoryId" element={<CategoryPage />} />
          {/* EXAM */}
          {/*<Route path="/exam-schedule-2024" element={<Schedule />} />*/}
          <Route path="/exams/jee-main" element={<Amain />} />
          <Route path="/exams/jee-advanced" element={<Aadvanced />} />
          <Route path="/exams/neet" element={<Aneet />} />
          <Route path="/exams/ntse" element={<Antse />} />
          <Route path="/exams/ipho" element={<Aipho />} />
          <Route path="/exams/imo" element={<Aimo />} />
          <Route path="/exams/nso" element={<Anso />} />
          <Route path="/exams/sfo" element={<Asfo />} />
          <Route path="/exams/ieo" element={<Aieo />} />
          <Route path="/exams/igko" element={<Aigko />} />
          <Route path="/exams/isso" element={<Aisso />} />
          <Route path="/exams/nstse" element={<Anstse />} />
          {/* PYQ */}
          <Route path="/pyq/jee-main" element={<PYmain />} />
          <Route path="/pyq/jee-advanced" element={<PYadvanced />} />
          <Route path="/pyq/neet" element={<PYneet />} />
          <Route path="/pyq/cbse-board" element={<PYcbse />} />
          <Route path="/pyq/kvpy" element={<PYkvpy />} />
          <Route path="/pyq/ntse" element={<PYntse />} />

          {/* SYLLABUS */}
          <Route path="/syllabus/jee-main" element={<Smain />} />
          <Route path="/syllabus/jee-advanced" element={<Sadvanced />} />
          <Route path="/syllabus/neet" element={<Sneet />} />
          {/* <Route path="/syllabus-cbse-boards" element={<Scbse />} />*/}
          <Route path="/syllabus/ntse" element={<Sntse />} />
          {/* NCERT Books Page */}
          <Route path="/books/ncert" element={<Ncert />} />
          <Route path="/books/ncert/class-6" element={<Ncert6 />} />
          <Route path="/books/ncert/class-7" element={<Ncert7 />} />
          <Route path="/books/ncert/class-8" element={<Ncert8 />} />
          <Route path="/books/ncert/class-9" element={<Ncert9 />} />
          <Route path="/books/ncert/class-10" element={<Ncert10 />} />
          <Route path="/books/ncert/class-11" element={<Ncert11 />} />
          <Route path="/books/ncert/class-12" element={<Ncert12 />} />
          {/* Other Books Pages */}
          <Route path="/books/jee" element={<JeeB />} />
          <Route path="/books/neet" element={<NeetB />} />
          <Route path="/books/foundation" element={<FoundationB />} />
          <Route path="/books/cbse" element={<Sample />} />
          {/* Mains Year Wise Pages */}
          <Route path="/pyq/jee-main/2017" element={<Main2017 />} />
          <Route path="/pyq/jee-main/2018" element={<Main2018 />} />
          <Route path="/pyq/jee-main/2019" element={<Main2019 />} />
          <Route path="/pyq/jee-main/2020" element={<Main2020 />} />
          <Route path="/pyq/jee-main/2021" element={<Main2021 />} />
          <Route path="/pyq/jee-main/2022" element={<Main2022 />} />
          <Route path="/pyq/jee-main/2023" element={<Main2023 />} />
          <Route path="/pyq/jee-main/2024" element={<Main2024 />} />
          <Route path="/pyq/jee-main/2025" element={<Main2025 />} />
          {/* Advance Year Wise Pages */}
          <Route path="/pyq/jee-advanced/2017" element={<Adv2017 />} />
          <Route path="/pyq/jee-advanced/2018" element={<Adv2018 />} />
          <Route path="/pyq/jee-advanced/2019" element={<Adv2019 />} />
          <Route path="/pyq/jee-advanced/2020" element={<Adv2020 />} />
          <Route path="/pyq/jee-advanced/2021" element={<Adv2021 />} />
          <Route path="/pyq/jee-advanced/2022" element={<Adv2022 />} />
          <Route path="/pyq/jee-advanced/2023" element={<Adv2023 />} />
          <Route path="/pyq/jee-advanced/2024" element={<Adv2024 />} />
          <Route path="/pyq/jee-advanced/2025" element={<Adv2025 />} />
          {/* Neet Year Wise Pages */}
          <Route path="/pyq/neet/2017" element={<Neet2017 />} />
          <Route path="/pyq/neet/2018" element={<Neet2018 />} />
          <Route path="/pyq/neet/2019" element={<Neet2019 />} />
          <Route path="/pyq/neet/2020" element={<Neet2020 />} />
          <Route path="/pyq/neet/2021" element={<Neet2021 />} />
          <Route path="/pyq/neet/2022" element={<Neet2022 />} />
          <Route path="/pyq/neet/2023" element={<Neet2023 />} />
          <Route path="/pyq/neet/2024" element={<Neet2024 />} />
          <Route path="/pyq/neet/2025" element={<Neet2025 />} />
          {/* CBSE Year Wise Pages */}
          <Route path="/pyq/cbse-board/2017" element={<Cbse2017 />} />
          <Route path="/pyq/cbse-board/2018" element={<Cbse2018 />} />
          <Route path="/pyq/cbse-board/2019" element={<Cbse2019 />} />
          <Route path="/pyq/cbse-board/2020" element={<Cbse2020 />} />
          <Route path="/pyq/cbse-board/2021" element={<Cbse2021 />} />
          <Route path="/pyq/cbse-board/2022" element={<Cbse2022 />} />
          <Route path="/pyq/cbse-board/2023" element={<Cbse2023 />} />
          {/* Others */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
          {/*<Route path="*" element={<PagenotFound />} />
           */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
