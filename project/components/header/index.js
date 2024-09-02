import React from "react";
import header from "@/styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div className={header.nav_main_body}>
      {/* ----------Navbar Top Start------------ */}

      <div className={`${header.nav_top_body} container`}>
        <div className={`${header.nav_top_body_content_sec} `}>
          <span>
            {" "}
            <div>
              <Image src={"/images/phone.png"} height={20} width={20} alt="" />
            </div>
            +971 (0)4 586 7200
          </span>
          <span>
            {" "}
            <div>
              <Image src={"/images/email.png"} height={14} width={17} alt="" />
            </div>
            info@parisima.com{" "}
          </span>{" "}
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
        <div className={`${header.nav_logo}`}>
          <Image
            src={"/images/parisima-logo.png"}
            height={60}
            width={250}
            alt=""
          />
        </div>
        <ul className={`${header.nav_menu_sec}`}>
          <li>
            <Link href={"/"}>
              ABOUT US
              <div className={`${header.nav_menu_down_arrow_icon}`}>
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              OUR SERVICES
              <div className={`${header.nav_menu_down_arrow_icon}`}>
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              FOR CANDIDATES
              <div className={`${header.nav_menu_down_arrow_icon}`}>
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              OUR EXPERTISE
              <div className={`${header.nav_menu_down_arrow_icon}`}>
                <Image
                  src={"/images/nav-arrow.png"}
                  height={5}
                  width={10}
                  alt=""
                />
              </div>
            </Link>
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
          <li>
            <Link href={"/"}>عربي</Link>
          </li>
        </ul>
      </div>
      {/* ----------Navbar Main Ends------------ */}
    </div>
  );
};

export default Index;
