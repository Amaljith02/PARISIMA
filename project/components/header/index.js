import React, { useState } from "react";
import header from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  const [dropdownList, setDropdownList] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const dropdownListHandler = (index) => {
    if (dropdownList[index] === true) {
      setDropdownList(false);
    } else {
      setDropdownList(false);
      setDropdownList((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
    console.log(dropdownList);
  };

  const [hamb, setHamb] = useState(false);
  const hamburgerButtonActions = () => {
    setHamb((prev) => !prev);
  };
  return (
    <div className={header.nav_main_body}>
      {/* ----------Navbar Top Start------------ */}

      <div className={`${header.nav_top_body} container`}>
        <div className={`${header.nav_top_body_content_sec} `}>
          <Link href={"/"} className={`${header.nav_top_link} `}>
            {" "}
            <div className={`${header.nav_top_link_icon} `}>
              <Image src={"/images/phone.png"} height={20} width={20} alt="" />
            </div>
            +971 (0)4 586 7200
          </Link>
          <Link href={"/"} className={`${header.nav_top_link} `}>
            {" "}
            <div className={`${header.nav_top_link_icon} `}>
              <Image src={"/images/email.png"} height={14} width={17} alt="" />
            </div>
            info@parisima.com{" "}
          </Link>{" "}
        </div>
        <div className={`${header.nav_top_body_content_sec} `}>
          <Link href={"/"} className={`${header.nav_top_register_btn} `}>
            <span>
              <Image
                src={"/images/register-your-job.png"}
                height={17}
                width={17}
                alt=""
              />
            </span>
            REGISTER YOUR JOB
          </Link>
          <Link href={"/"} className={`${header.nav_top_register_btn} `}>
            <span>
              <Image
                src={"/images/register-your-cv.png"}
                height={17}
                width={17}
                alt=""
              />
            </span>
            REGISTER YOUR CV
          </Link>
        </div>
      </div>
      {/* ----------Navbar Top End------------ */}
      {/* ----------Navbar Main Starts------------ */}

      <div className={`${header.nav_bottom_body} container`}>
        <Link href={"/"} className={`${header.nav_logo}`}>
          <Image
            src={"/images/parisima-logo.png"}
            height={60}
            width={250}
            alt=""
          />
        </Link>
        <ul className={`${header.nav_menu_sec}`}>
          <li className={`${header.nav_dropdown_menu_sec}`}>
            <Link href={"/"}>
              ABOUT US
              <div
                className={`${header.nav_menu_down_arrow_icon}`}
                onClick={() => dropdownListHandler(0)}
              >
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                  style={
                    dropdownList[0] && {
                      transform: "rotate(180deg)",
                    }
                  }
                />
              </div>
            </Link>
            {dropdownList[0] && (
              <ul className={`${header.nav_dropdown_menu_list}`}>
                <li>
                  <Link href={"/"}>HOW WE ARE </Link>
                </li>
                <li>
                  <Link href={"/"}>LOCATIONS</Link>
                </li>
                <li>
                  <Link href={"/"}>WHY PARISIMA </Link>
                </li>
                <li>
                  <Link href={"/"}>LEADERSHIP </Link>
                </li>
                <li>
                  <Link href={"/"}>KEY FACT </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`${header.nav_dropdown_menu_sec}`}>
            <Link href={"/"}>
              OUR SERVICES
              <div
                className={`${header.nav_menu_down_arrow_icon}`}
                onClick={() => dropdownListHandler(1)}
              >
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                  style={
                    dropdownList[1] && {
                      transform: "rotate(180deg)",
                    }
                  }
                />
              </div>
            </Link>
            {dropdownList[1] && (
              <ul className={`${header.nav_dropdown_menu_list}`}>
                <li>
                  <Link href={"/"}>HOW WE ARE </Link>
                </li>
                <li>
                  <Link href={"/"}>LOCATIONS</Link>
                </li>
                <li>
                  <Link href={"/"}>WHY PARISIMA PARISIMA </Link>
                </li>
                <li>
                  <Link href={"/"}>LEADERSHIP </Link>
                </li>
                <li>
                  <Link href={"/"}>KEY FACT </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`${header.nav_dropdown_menu_sec}`}>
            <Link href={"/"}>
              FOR CANDIDATES
              <div
                className={`${header.nav_menu_down_arrow_icon}`}
                onClick={() => dropdownListHandler(2)}
              >
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                  style={
                    dropdownList[2] && {
                      transform: "rotate(180deg)",
                    }
                  }
                />
              </div>
            </Link>
            {dropdownList[2] && (
              <ul className={`${header.nav_dropdown_menu_list}`}>
                <li>
                  <Link href={"/"}>HOW WE ARE </Link>
                </li>
                <li>
                  <Link href={"/"}>LOCATIONS</Link>
                </li>
                <li>
                  <Link href={"/"}>WHY PARISIMA </Link>
                </li>
                <li>
                  <Link href={"/"}>LEADERSHIP </Link>
                </li>
                <li>
                  <Link href={"/"}>KEY FACT </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={`${header.nav_dropdown_menu_sec}`}>
            <Link href={"/"}>
              OUR EXPERTISE
              <div
                className={`${header.nav_menu_down_arrow_icon}`}
                onClick={() => dropdownListHandler(3)}
              >
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                  style={
                    dropdownList[3] && {
                      transform: "rotate(180deg)",
                    }
                  }
                />
              </div>
            </Link>

            {dropdownList[3] && (
              <ul className={`${header.nav_dropdown_menu_list}`}>
                <li>
                  <Link href={"/"}>HOW WE ARE </Link>
                </li>
                <li>
                  <Link href={"/"}>LOCATIONS</Link>
                </li>
                <li>
                  <Link href={"/"}>WHY PARISIMA </Link>
                </li>
                <li>
                  <Link href={"/"}>LEADERSHIP </Link>
                </li>
                <li>
                  <Link href={"/"}>KEY FACT </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href={"/"}>INSIGHTS</Link>
          </li>
          <li>
            <Link href={"/"}>CAREERS</Link>
          </li>
          <li>
            <Link href={"/"}>CONTACT US</Link>
          </li>
          <li className={header.arabic_left_border}>
            <Link href={"/"}>عربي</Link>
          </li>
        </ul>


        {/* ----------Navbar Main Ends------------ */}


        {/* ------Hamburger button-------- */}

        <div
          className={header.navbar_hamb_main}
          onClick={hamburgerButtonActions}
        >
          <div
            className={
              hamb == false
                ? `${header.navbar_hamb_line}`
                : `${header.navbar_hamb_line_after}`
            }
          ></div>
          <div
            className={
              hamb == false
                ? `${header.navbar_hamb_line}`
                : `${header.navbar_hamb_line_after}`
            }
          ></div>
          <div
            className={
              hamb == false
                ? `${header.navbar_hamb_line}`
                : `${header.navbar_hamb_line_after}`
            }
          ></div>
        </div>

        {/* --------Hamburger List Section------------- */}

        {hamb == true && (
          <div className={header.hamburger_list_container}>
            <ul className={`${header.hamb_nav_menu_sec}`}>
              <li className={`${header.hamb_nav_dropdown_menu_sec}`}>
                <Link href={"/"}>
                  ABOUT US
                  <div
                    className={`${header.hamb_nav_menu_down_arrow_icon}`}
                    onClick={() => dropdownListHandler(0)}
                  >
                    <Image
                      src={"/images/nav-arrow.png"}
                      height={5}
                      width={10}
                      alt=""
                      style={
                        dropdownList[0] && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  </div>
                </Link>
              </li>
              {dropdownList[0] && (
                <li>
                  <ul className={`${header.hamb_nav_dropdown_menu_list}`}>
                    <li>
                      <Link href={"/"}>HOW WE ARE </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LOCATIONS</Link>
                    </li>
                    <li>
                      <Link href={"/"}>WHY PARISIMA </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LEADERSHIP </Link>
                    </li>
                    <li>
                      <Link href={"/"}>KEY FACT </Link>
                    </li>
                  </ul>
                </li>
              )}
              <li className={`${header.hamb_nav_dropdown_menu_sec}`}>
                <Link href={"/"}>
                  OUR SERVICES
                  <div
                    className={`${header.hamb_nav_menu_down_arrow_icon}`}
                    onClick={() => dropdownListHandler(1)}
                  >
                    <Image
                      src={"/images/nav-arrow.png"}
                      height={5}
                      width={10}
                      alt=""
                      style={
                        dropdownList[1] && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  </div>
                </Link>
              </li>
              {dropdownList[1] && (
                <li>
                  <ul className={`${header.hamb_nav_dropdown_menu_list}`}>
                    <li>
                      <Link href={"/"}>HOW WE ARE </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LOCATIONS</Link>
                    </li>
                    <li>
                      <Link href={"/"}>WHY PARISIMA PARISIMA </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LEADERSHIP </Link>
                    </li>
                    <li>
                      <Link href={"/"}>KEY FACT </Link>
                    </li>
                  </ul>
                </li>
              )}
              <li className={`${header.hamb_nav_dropdown_menu_sec}`}>
                <Link href={"/"}>
                  FOR CANDIDATES
                  <div
                    className={`${header.hamb_nav_menu_down_arrow_icon}`}
                    onClick={() => dropdownListHandler(2)}
                  >
                    <Image
                      src={"/images/nav-arrow.png"}
                      height={5}
                      width={10}
                      alt=""
                      style={
                        dropdownList[2] && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  </div>
                </Link>
              </li>
              {dropdownList[2] && (
                <li>
                  <ul className={`${header.hamb_nav_dropdown_menu_list}`}>
                    <li>
                      <Link href={"/"}>HOW WE ARE </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LOCATIONS</Link>
                    </li>
                    <li>
                      <Link href={"/"}>WHY PARISIMA </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LEADERSHIP </Link>
                    </li>
                    <li>
                      <Link href={"/"}>KEY FACT </Link>
                    </li>
                  </ul>
                </li>
              )}
              <li className={`${header.hamb_nav_dropdown_menu_sec}`}>
                <Link href={"/"}>
                  OUR EXPERTISE
                  <div
                    className={`${header.hamb_nav_menu_down_arrow_icon}`}
                    onClick={() => dropdownListHandler(3)}
                  >
                    <Image
                      src={"/images/nav-arrow.png"}
                      height={5}
                      width={10}
                      alt=""
                      style={
                        dropdownList[3] && {
                          transform: "rotate(180deg)",
                        }
                      }
                    />
                  </div>
                </Link>
              </li>
              {dropdownList[3] && (
                <li>
                  <ul className={`${header.hamb_nav_dropdown_menu_list}`}>
                    <li>
                      <Link href={"/"}>HOW WE ARE </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LOCATIONS</Link>
                    </li>
                    <li>
                      <Link href={"/"}>WHY PARISIMA </Link>
                    </li>
                    <li>
                      <Link href={"/"}>LEADERSHIP </Link>
                    </li>
                    <li>
                      <Link href={"/"}>KEY FACT </Link>
                    </li>
                  </ul>
                </li>
              )}
              <li>
                <Link href={"/"}>INSIGHTS</Link>
              </li>
              <li>
                <Link href={"/"}>CAREERS</Link>
              </li>
              <li>
                <Link href={"/"}>CONTACT US</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
