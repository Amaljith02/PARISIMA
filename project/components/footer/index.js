import React from "react";
import footer from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div>
      <div className={footer.footer_main_body}>
        <div className={`${footer.footer_main_body_container} container`}>
          <Link href={"/"} className={footer.footer_logo}>
            <Image
              src={"/images/parisima-logo.png"}
              height={67}
              width={275}
              alt=""
            />
          </Link>{" "}
          <div className={footer.footer_menu_sec}>
            <div className={footer.footer_menu_col}>
              <h3 className="pt-sans"> QUICK LINKS</h3>
              <ul className={footer.footer_list}>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>About Us </Link>
                </li>
                <li>
                  <Link href={"/"}>Our Services</Link>
                </li>
                <li>
                  <Link href={"/"}>Our Expertise</Link>
                </li>
              </ul>
            </div>
            <div className={footer.footer_menu_col}>
              <h3 className="pt-sans"> MORE LINKS</h3>
              <ul className={footer.footer_list}>
                <li>
                  <Link href={"/"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/"}> Careers </Link>
                </li>
                <li>
                  <Link href={"/"}>Terms And Conditions</Link>
                </li>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className={footer.footer_menu_col}>
              <h3 className="pt-sans"> CONNECT WITH US</h3>
              <ul className={footer.footer_connect_us_logo}>
                <li>
                  <Link
                    href={"/"}
                    className={footer.footer_connect_us_logo_img}
                  >
                    <Image
                      src={"/images/linkedin.png"}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={footer.footer_connect_us_logo_img}
                  >
                    <Image
                      src={"/images/instagram.png"}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className={footer.footer_connect_us_logo_img}
                  >
                    <Image
                      src={"/images/youtube.png"}
                      height={20}
                      width={20}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${footer.footer_bottom_container} container`}>
          <h4>© 2024 . Parisima . All right reserved</h4>
        </div>
      </div>
    </div>
  );
};

export default Index;
