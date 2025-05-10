import { image } from "framer-motion/client";
import img1 from "../../assests/home_page/dsa1.png";
import img2 from "../../assests/home_page/dsa2.png";
import img3 from "../../assests/home_page/dsa3.png";
import img4 from "../../assests/home_page/dsa4.png";
import img5 from "../../assests/home_page/learn1.png";
import img6 from "../../assests/home_page/learn4.png";
import img7 from "../../assests/home_page/dev1.png";
import img8 from "../../assests/home_page/dev2.png";
import img9 from "../../assests/home_page/dev3.png";
import img10 from "../../assests/home_page/dev4.png";
import img11 from "../../assests/home_page/ML-DS1-min.png";
import img12 from "../../assests/home_page/ML-DS2-min.png";
import img13 from "../../assests/home_page/ML-DS3-min.png";
import img14 from "../../assests/home_page/ML-DS4-min.png";

// import leftArrowIcon from "../../assests/home_page/left-arrow.svg";
// import rightArrowIcon from "../../assests/home_page/right-arrow.svg";

// Exams data
export const examData = [
  {
    id: "jee-main",
    title: "JEE Mains",
    description:
      "Joint Entrance Examination (JEE) Main is a standardized test conducted for admission to various engineering colleges in India. The exam is conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs.",
    bgColor: "bg-[#21A1A1]",
    image: img1,
  },
  {
    id: "jee-advanced",
    title: "JEE Advanced",
    description:
      "JEE Advanced is the second phase of the Joint Entrance Examination conducted for admission to the 23 Indian Institutes of Technology (IITs). Only the top 2,50,000 rank holders in JEE Main qualify to appear for JEE Advanced.",
    bgColor: "bg-[#21A1A1]",
    image: img2,
  },
  {
    id: "neet",
    title: "NEET",
    description:
      "The National Eligibility cum Entrance Test (NEET) is the entrance examination for admission to medical colleges in India. It is conducted by the National Testing Agency (NTA) for admission to MBBS, BDS, AYUSH and other medical courses.",
    bgColor: "bg-[#21A1A1]",
    image: img3,
  },
  // {
  //   id: "boards",
  //   title: "Boards",
  //   description:
  //     "Board exams are the final examinations conducted by educational boards at the end of an academic year. They serve as an evaluation of a student's understanding of the subjects they have studied throughout the year.",
  //   bgColor: "bg-[#21A1A1]",
  //   image: img4,
  // },
  {
    id: "ntse",
    title: "NTSE",
    bgColor: "bg-[#21A1A1]",
    description:
      "The National Talent Search Examination (NTSE) is a national-level scholarship program to identify and nurture talented students. It is conducted by NCERT for students studying in Class X.",
    image: img1,
  },
  {
    id: "ipho",
    title: "IPhO",
    description:
      "International Physics Olympiad (IPhO) is a competition for pre-university students to test their knowledge in physics at an advanced level.",
    bgColor: "bg-[#21A1A1]",
    image: img2,
  },
  {
    id: "imo",
    title: "IMO",
    description:
      "International Mathematics Olympiad (IMO) challenges students with complex mathematical problems and promotes logical thinking.",
    bgColor: "bg-[#21A1A1]",
    image: img3,
  },
  {
    id: "nso",
    title: "NSO",
    description:
      "National Science Olympiad (NSO) evaluates students' science knowledge and analytical skills at school level.",
    bgColor: "bg-[#21A1A1]",
    image: img4,
  },
  {
    id: "sfo",
    title: "SFO",
    description:
      "Science Foundation Olympiad (SFO) helps build a strong base in science among school students through competition.",
    bgColor: "bg-[#21A1A1]",
    image: img1,
  },
  {
    id: "ieo",
    title: "IEO",
    description:
      "International English Olympiad (IEO) is designed to assess English language skills of school students across various topics.",
    bgColor: "bg-[#21A1A1]",
    image: img2,
  },
  {
    id: "igko",
    title: "IGKO",
    description:
      "International General Knowledge Olympiad (IGKO) tests general awareness, current affairs, and logical reasoning of students.",
    bgColor: "bg-[#21A1A1]",
    image: img3,
  },
  {
    id: "isso",
    title: "ISSO",
    description:
      "International Social Studies Olympiad (ISSO) examines students’ knowledge in history, geography, civics, and more.",
    bgColor: "bg-[#21A1A1]",
    image: img4,
  },
  {
    id: "nstse",
    title: "NSTSE",
    description: "",
    bgColor: "bg-[#21A1A1]",
    image: img1,
  },
];

// Previous Year Questions data
export const questionsData = [
  {
    id: "jee-main",
    title: "JEE Mains",
    bgColor: "bg-[#5dc298]",
    image: img7,
  },
  {
    id: "jee-advanced",
    title: "JEE Advanced",
    bgColor: "bg-[#5dc298]",
    image: img8,
  },
  {
    id: "neet",
    title: "NEET",
    bgColor: "bg-[#5dc298]",
    image: img7,
  },
  {
    id: "cbse-board",
    title: "CBSE Board",
    bgColor: "bg-[#5dc298]",
    image: img8,
  },
  {
    id: "kvpy",
    title: "KVPY",
    bgColor: "bg-[#5dc298]",
    image: img9,
  },
  {
    id: "ntse",
    title: "NTSE",
    bgColor: "bg-[#5dc298]",
    image: img10,
  },
];

// Syllabus data
export const syllabusData = [
  {
    id: "jee-main",
    title: "JEE Mains",
    bgColor: "bg-indigo-600",
    image: img11,
  },
  {
    id: "jee-advanced",
    title: "JEE Advanced",
    bgColor: "bg-indigo-600",
    image: img12,
  },
  {
    id: "neet",
    title: "NEET",
    bgColor: "bg-indigo-600",
    image: img13,
  },
  // {
  //   id: "cbse-board",
  //   title: "CBSE Board",
  //   bgColor: "bg-indigo-600",
  //   image: img14,
  // },
  {
    id: "ntse",
    title: "NTSE",
    bgColor: "bg-indigo-600",
    image: img14,
  },
  // {
  //   id: "olympiads",
  //   title: "Olympiads",
  //   bgColor: "bg-indigo-600",
  //   image: img12,
  // },
];

// Books data
export const booksData = [
  {
    id: "ncert",
    title: "NCERT",
    bgColor: "bg-[#12bd84]",
    image: img5,
  },
  {
    id: "jee",
    title: "JEE (Mains + Adv.)",
    bgColor: "bg-[#12bd84]",
    image: img6,
  },
  {
    id: "neet",
    title: "NEET",
    bgColor: "bg-[#12bd84]",
    image: img5,
  },
  {
    id: "cbse-sample-paper",
    title: "CBSE Sample Paper",
    bgColor: "bg-[#12bd84]",
    image: img6,
  },
  {
    id: "foundation",
    title: "Foundation",
    bgColor: "bg-[#12bd84]",
    image: img5,
  },
];

export const getCategoryTitle = (categoryId) => {
  switch (categoryId) {
    case "exams":
      return "About Exams";
    case "pyq":
      return "Previous Year Questions";
    case "syllabus":
      return "Syllabus";
    case "books":
      return "Books";
    default:
      return "Resources";
  }
};
