import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mainlogo from "../../assests/home_page/mainlogo.jpg";

const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #f39c12;
  padding: 5px 10px;
  .sidenav {
    height: 100%;
    width: 70%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: white; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: 0.5s;
    font-size: 19px;
  }
  .active {
    background-color: blue;
  }
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 19px;
    background-color: white;
    color: black;
    display: block;
    transition: 0.3s;
  }
  .sidenav .closebtn {
    position: absolute;
    text=align: right;
    top: 0;
    border-bottom: 1px solid white;
    right: 0;
    font-size: 48px;
    color: #111;
    margin-top: -15px;
  }
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left 0.5s;
    padding: 20px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }
    .sidenav a {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 475px) {
    .sidenav {
      width: 80%;
    }
  }
  @media screen and (max-width: 400px) {
    .sidenav {
      width: 90%;
    }
  }
  @media screen and (max-width: 340px) {
    .sidenav {
      width: 95%;
    }
  }
  @media screen and (max-width: 320px) {
    .sidenav {
      width: 100%;
    }
  }
`;
const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const HamburgerIcon = styled.span`
  font-size: 30px;
`;
const UserDetails = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
`;
const UserImage = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const Details = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  border-bottom: 4px solid #f39c12;
  width: 100%;
  padding: 5px 10px;
`;
const Image = styled.img`
  margin-left: 5px;
  width: auto;
  height: 75px;
  margin-right: 10px;
`;
const SidebarContent = styled.div`
  background-color: white;
`;
const CloseButton = styled.a`
  cursor: pointer;
  color: black; /* Add your desired color */
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  transition: 0.3s;
  background-color: red;
  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: blue;
  }
`;
const DropdownMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  border-bottom: 1px solid blue;
  border-top: 1px solid blue;
  .dropdown-item {
    color: black;
    padding: 10px 30px;
    text-decoration: none;
    display: block;
    transition: 0.3s;

    &:hover {
      background-color: #555;
    }
  }
`;
const DropdownToggle = styled(StyledNavLink)`
  color: white;
  display: block;
  padding: 1px 1px;
  text-decoration: none;
  transition: 0.3s;
  z-index: 1;
  background-color: white;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #2904f9;
  }
`;
const DropdownItem = styled.li`
  color: white;
  padding: 2px 2px;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (key) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  return (
    <StyledSidebarContainer>
      <MenuButton onClick={toggleSidebar}>
        <HamburgerIcon>&#9776;</HamburgerIcon>
      </MenuButton>
      <UserDetails>
        <UserImage src={mainlogo} alt="" />
      </UserDetails>
      {isSidebarOpen && (
        <SidebarContent>
          <div id="mySidenav" className="sidenav">
            <CloseButton className="closebtn" onClick={closeSidebar}>
              &times;
            </CloseButton>
            <Details>
              <Image src={mainlogo} alt="" />
            </Details>

            <StyledNavLink to="/" exact>
              Home
            </StyledNavLink>
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("pyq")}
              className="dropdown-toggle"
            >
              Previous Year Questions{" "}
              <i
                class="fa-solid fa-caret-down"
                style={{ fontSize: "15px", marginRight: "5px" }}
              ></i>
            </DropdownToggle>
            {dropdownOpen.pyq && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/pyq/jee-main" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    JEE-Main
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/pyq/jee-advanced"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    JEE-Advanced
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/pyq/neet" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    NEET
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/pyq/cbse-board" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    CBSE Boards
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/pyq/ntse" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    NTSE
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/pyq/kvpy" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    KVPY
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("exams")}
              className="dropdown-toggle"
            >
              Exams{" "}
              <i
                class="fa-solid fa-caret-down"
                style={{ fontSize: "15px", marginRight: "5px" }}
              ></i>
            </DropdownToggle>
            {dropdownOpen.exams && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/exams/jee-main" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Main
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/exams/jee-advanced"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Advanced
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/exams/neet" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NEET
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/exams/ntse" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NTSE
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/exams" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Olympiads
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to=" " className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Exam Schedule 2025
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("syllabus")}
              className="dropdown-toggle"
            >
              Syllabus{" "}
              <i
                class="fa-solid fa-caret-down"
                style={{ fontSize: "15px", marginRight: "5px" }}
              ></i>
            </DropdownToggle>
            {dropdownOpen.syllabus && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink
                    to="/syllabus/jee-main"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Main
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/syllabus/jee-advanced"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE-Advanced
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/syllabus/neet" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    NEET
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/syllabus/ntse" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    NTSE
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/syllabus/cbse-board"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>{" "}
                    CBSE Boards
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <DropdownToggle
              to="#"
              onClick={() => toggleDropdown("books")}
              className="dropdown-toggle"
            >
              Books{" "}
              <i
                class="fa-solid fa-caret-down"
                style={{ fontSize: "15px", marginRight: "5px" }}
              ></i>
            </DropdownToggle>
            {dropdownOpen.books && (
              <DropdownMenu>
                <DropdownItem>
                  <StyledNavLink to="/books/ncert" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NCERT
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/books/jee" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    JEE(Main+Advanced)
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink to="/books/neet" className="dropdown-item">
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    NEET
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/books/cbse-sample-paper"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    CBSE Sample Paper
                  </StyledNavLink>
                </DropdownItem>
                <DropdownItem>
                  <StyledNavLink
                    to="/books/foundation"
                    className="dropdown-item"
                  >
                    <i
                      className="fas fa-angle-double-right"
                      style={{ color: "#f39c12", marginRight: "5px" }}
                    ></i>
                    Foundation
                  </StyledNavLink>
                </DropdownItem>
              </DropdownMenu>
            )}
            <StyledNavLink to=" " exact>
              Brochure
            </StyledNavLink>
            <StyledNavLink to=" " exact>
              Contact Us
            </StyledNavLink>
          </div>
        </SidebarContent>
      )}
    </StyledSidebarContainer>
  );
};

export default Sidebar;
