import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import mainlogo from "../../assests/home_page/mainlogo.jpg";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
const pyq = [
  {
    name: "JEE-Main",
    // href: "/pyq-jee-main",
  },
  {
    name: "JEE-Advanced",
    // href: "/pyq-jee-advanced",
  },
  {
    name: "NEET",
    // href: "/pyq-neet",
  },
  {
    name: "CBSE Boards",
    // href: "/pyq-cbse-boards",
  },
  {
    name: "NTSE",
    // href: "/pyq-ntse",
  },
  {
    name: "KVPY",
    // href: "/pyq-kvpy",
  },
];
const exams = [
  {
    name: "Exam Schedule 2024",
    // href: "/exam-schedule-2024",
  },
  {
    name: "JEE-Main",
    href: "/exam-jee-main",
  },
  {
    name: "JEE-Advanced",
    href: "/exam-jee-advanced",
  },
  {
    name: "NEET",
    href: "/exam-neet",
  },
  {
    name: "NTSE",
    href: "/exam-ntse",
  },
];
const syllabus = [
  {
    name: "JEE-Main",
    href: "/syllabus-jee-main",
  },
  {
    name: "JEE-Advanced",
    href: "/syllabus-jee-advanced",
  },
  {
    name: "NEET",
    href: "/syllabus-neet",
  },
  {
    name: " CBSE Boards",
    // href: "/syllabus-cbse-boards",
  },
  {
    name: "NTSE",
    href: "/syllabus-ntse",
  },
];
const books = [
  {
    name: "NCERT",
    // href: "/ncert-books",
  },
  {
    name: "JEE(Main+Advanced)",
    // href: "/jee(mains+advanced)-books",
  },
  {
    name: "NEET",
    // href: "/neet-books",
  },
  {
    name: "CBSE Sample Paper 2024",
    // href: "/cbse-sample-2024",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className=" flex max-w-9xl items-center justify-between p-1 lg:px-8 border-b-4 border-orange-500"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to=" " className="-m-1.5 p-1.5">
            <span className="sr-only">IIT Academy</span>
            <img className="h-20 w-auto" src={mainlogo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 h-30 w-30 font-bold inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 mr-4"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-12 mr-40">
          <Link
            to=" "
            className="text-lg font-semibold leading-6 text-gray-900 mt-1"
          >
            Home
          </Link>
          {/*dkfhj*/}
          <Popover
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Popover.Button
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none"
              style={{ whiteSpace: "nowrap" }}
            >
              Previous Year Questions
              {isOpen ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {pyq.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover
            className="relative"
            onMouseEnter={() => setIsOpen1(true)}
            onMouseLeave={() => setIsOpen1(false)}
          >
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none">
              Exams
              {isOpen1 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen1}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {exams.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover
            className="relative"
            onMouseEnter={() => setIsOpen2(true)}
            onMouseLeave={() => setIsOpen2(false)}
          >
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none">
              Syllabus
              {isOpen2 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen2}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {syllabus.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover
            className="relative"
            onMouseEnter={() => setIsOpen3(true)}
            onMouseLeave={() => setIsOpen3(false)}
          >
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900 focus:outline-none">
              Books
              {isOpen3 ? (
                <ChevronUpIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-7 w-7 flex-none text-gray-900 -ml-1 mt-1"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              show={isOpen3}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="lg:max-w-xs absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-2">
                  {books.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-0 rounded-lg -p-1 text-sm leading-6 hover:bg-orange-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  hover:bg-orange-200">
                        <i
                          className="fas fa-angle-double-right"
                          style={{
                            color: "#f39c12",
                            fontSize: "larger",
                            marginUp: "2px",
                          }}
                        ></i>
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-lg text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <p className="text-lg font-semibold leading-6 text-gray-900 mt-1">
            <Link
              to=" "
              className="text-lg font-semibold leading-6 text-gray-900 mt-1"
            >
              Contact Us
            </Link>
          </p>
        </Popover.Group>
      </nav>
    </header>
  );
}
