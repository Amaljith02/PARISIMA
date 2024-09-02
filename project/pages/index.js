import React from "react";
import home from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
const index = () => {
  return (
    <div>
      {/* --------GCC EXpansion Page Start-------------- */}
      <div className={home.gcc_expansion_page}>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          speed={5000}
          effect="fade"
          modules={[Pagination, EffectFade]}
          className={`mySwiper ${home.gcc_expansion_swiper_page} container `}
        >
          <SwiperSlide>
            <div
              className={`${home.gcc_expansion_container_page} container`}
              style={{
                background:
                  "#1f3444 url(./images/p1-background-center.png) no-repeat center/cover ",
              }}
            >
              <div className={`${home.gcc_expansion_container_page_text_sec} `}>
                <h1 className="pt-sans">
                  GCC EXPANSION <br /> WITH NEW OFFICE <br /> IN KSA
                </h1>
                <p>
                  Parisima is expanding its presence in the GCC with a new
                  office <br /> in Riyadh dedicated to supporting growing demand
                  for talent <br />
                  solutions in the Kingdom.
                </p>
                <Link
                  href={
                    "https://www.figma.com/design/erkKwvpMGzcSm3Y4JEt40Y/Untitled?t=7e1bgitnqcAayJHE-0"
                  }
                  className={home.gcc_expansion_container_btn}
                >
                  GET STARTED{" "}
                  <div className="button_right_arrow_img">
                    <Image
                      src={"/images/p1-btn-arrow.png"}
                      height={16}
                      width={18}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className={home.gcc_expansion_container_page_img}>
                <Image
                  src={"/images/p1-background-main.png"}
                  height={1000}
                  width={779}
                  alt=""
                />
              </div>
            </div>
            {/* ------Bottom Linear Gradient------- */}
            <div className={home.gcc_linear_background}>
              <Image
                src={"/images/gcc-gradient-back.png"}
                height={387}
                width={1920}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${home.gcc_expansion_container_page} container`}
              style={{
                background:
                  "#1f3444 url(./images/p1-background-center.png) no-repeat center/cover ",
              }}
            >
              <div className={`${home.gcc_expansion_container_page_text_sec} `}>
                <h1 className="pt-sans">
                  GCC EXPANSION EXPANSION <br /> WITH NEW OFFICE <br /> IN KSA
                  IN KSA
                </h1>
                <p>
                  Parisima is expanding its presence in the GCC with a new
                  office <br /> in Riyadh dedicated to supporting growing demand
                  for talent <br />
                  solutions in the Kingdom.
                </p>
                <Link
                  href={
                    "https://www.figma.com/design/erkKwvpMGzcSm3Y4JEt40Y/Untitled?t=7e1bgitnqcAayJHE-0"
                  }
                  className={home.gcc_expansion_container_btn}
                >
                  GET STARTED{" "}
                  <div className="button_right_arrow_img">
                    <Image
                      src={"/images/p1-btn-arrow.png"}
                      height={16}
                      width={18}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              <div className={home.gcc_expansion_container_page_img}>
                <Image
                  src={"/images/p1-background-main.png"}
                  height={1000}
                  width={779}
                  alt=""
                />
              </div>
              {/* ------Bottom Linear Gradient------- */}
              <div className={home.gcc_linear_background}>
                <Image
                  src={"/images/gcc-gradient-back.png"}
                  height={387}
                  width={1920}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={home.gcc_expansion_page_scroll_down_sec}>
          <div className={home.gcc_expansion_page_scroll_down_img}>
            <Image
              src={"/images/scroll-down.png"}
              height={178}
              width={178}
              alt=""
            />
            <div className={home.gcc_expansion_page_scroll_down_mouse_logo}>
              <Image src={"/images/mouse.png"} height={31} width={19} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* --------GCC EXpansion Page End-------------- */}

      {/* --------We Build Leading Edge page start-------------- */}
      <div
        className={home.build_leading_edge_page}
        style={{
          background: `url(/images/build-leading-edge.png) no-repeat center/cover `,
        }}
      >
        <div className={`${home.build_leading_edge_container_page} container`}>
          <div className={`${home.build_leading_edge_img_text_sec} `}>
            <div className={`${home.build_leading_edge_img_sec} `}>
              <div className={`${home.build_leading_edge_img_sec_img1} `}>
                <Image
                  src={"/images/build-leading-edge-img1.png"}
                  height={560}
                  width={670}
                  alt=""
                />
              </div>
              <div className={`${home.build_leading_edge_img_sec_img2} `}>
                <Image
                  src={"/images/build-leading-edge-img2.png"}
                  height={375}
                  width={670}
                  alt=""
                />
              </div>
            </div>
            <div className={`${home.build_leading_edge_text_sec} `}>
              <h2 className="pt-sans">
                WE BUILD LEADING EDGE INFRASTRUCTURE WITHIN YOUR ORGANISATION
              </h2>
              <p>
                Parisima enables clients to improve their performance through
                better talent acquisition. We deliver world-class talent
                acquisition solutions, from Board and Executive moves, through
                to training, strategic hiring projects and complex recruitment
                programmes across geographies. Parisima has the expertise to
                provide best practice, cost effective and agile solutions.
                Bringing together Recruitment Process.
              </p>
              <p>
                Outsourcing (RPO), Permanent Placement, Contract Staffing and
                Assessment Centres, Parisima has the capability to create a
                unique solution to meet your needs.
              </p>
              <Link href={""} className={home.build_leading_edge_text_btn}>
                LEARN MORE
                <div className="button_right_arrow_img">
                  <Image
                    src={"/images/p1-btn-arrow.png"}
                    height={16}
                    width={18}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className={`${home.build_leading_edge_count_sec}  `}>
            <div className={`${home.build_leading_edge_count_card}  `}>
              <div className={`${home.build_leading_edge_count_card_logo} `}>
                <Image
                  src={"/images/countup1.png"}
                  height={120}
                  width={120}
                  alt=""
                />
              </div>
              <span>
                Clients
                <h3>3,500+</h3>
              </span>
            </div>
            <div className={`${home.build_leading_edge_count_card}  `}>
              <div className={`${home.build_leading_edge_count_card_logo} `}>
                <Image
                  src={"/images/countup2.png"}
                  height={120}
                  width={120}
                  alt=""
                />
              </div>
              <span>
                Employees
                <h3>16,000+</h3>
              </span>
            </div>
            <div className={`${home.build_leading_edge_count_card}  `}>
              <div className={`${home.build_leading_edge_count_card_logo} `}>
                <Image
                  src={"/images/countup3.png"}
                  height={120}
                  width={120}
                  alt=""
                />
              </div>
              <span>
                Years Of Experience
                <h3>80+</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* --------We Build Leading Edge page Ends-------------- */}

      {/* --------CEO Message page starts-------------- */}
      <div className={home.ceo_message_page}>
        <div className={`${home.ceo_message_page_container} container`}>
          <div className={`${home.ceo_message_text_content}`}>
            <h3 className=" pt-sans">CEO MESSAGE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              malesuada lacus sit amet consectetur sollicitudin. Vivamus
              condimentum at urna at hendrerit. Sed in laoreet ex. Curabitur at
              mauris ipsum. Praesent scelerisque mi et aliquet commodo. Aliquam
              ullamcorper ante mattis volutpat vulputate. Morbi tincidunt ante
              urna, ac congue odio laoreet quis. Nam nibh velit, porta in
              pharetra et, condimentum eu leo.
            </p>
            <h4>
              Tiago Costa <br />
              <span>CEO, Parisima</span>
            </h4>
          </div>
          <div className={home.ceo_message_profile}>
            <Image
              src={"/images/ceo-message-profile.png"}
              height={640}
              width={690}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* --------CEO Message page ends-------------- */}

      {/* --------How we work page starts-------------- */}
      <div className={home.how_we_work_main_page}>
        <div className={`${home.how_we_work_container} container`}>
          <div className={home.how_we_work_main_page_btn_sec}>
            <button
              className={home.how_we_work_main_page_btn}
              id="how_we_work_previous_btn"
            >
              <div className={home.how_we_work_main_page_btn_img}>
                <Image
                  src={"/images/btn-arrow.png"}
                  height={14}
                  width={7}
                  alt=""
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>{" "}
            </button>
            <button
              className={home.how_we_work_main_page_btn}
              id="how_we_work_next_btn"
            >
              <div className={home.how_we_work_main_page_btn_img}>
                <Image
                  src={"/images/btn-arrow.png"}
                  height={14}
                  width={7}
                  alt=""
                />
              </div>{" "}
            </button>
          </div>

          <div className={home.how_we_work_text_sec}>
            <h3 className="pt-sans">HOW WE WORK</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor sollicitudin est. Praesent id nibh mi. Aliquam commodo
              tellus sit amet libero volutpat scelerisque. Quisque eu blandit
              turpis, in porttitor purus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc mattis vitae mauris sed
              pharetra. Vivamus non ex suscipit, blandit lacus id, hendrerit
              nisi.
            </p>
            <Link href={""} className={`${home.how_we_work_text_btn} pt-sans`}>
              EXPLORE{" "}
              <div className="button_right_arrow_img">
                <Image
                  src={"/images/p1-btn-arrow.png"}
                  height={16}
                  width={18}
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>
            </Link>
          </div>
          <div className={home.how_we_work_swiper_sec}>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              loop={true}
              className="mySwiper"
              navigation={{
                nextEl: "#how_we_work_next_btn",
                prevEl: "#how_we_work_previous_btn",
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                {" "}
                <div className={home.how_we_work_swiper_card}>
                  <div className={home.how_we_work_swiper_card_img}>
                    <Image
                      src={"/images/how-we-work1.png"}
                      height={400}
                      width={600}
                      alt=""
                    />
                  </div>
                  <h3 className="pt-sans">
                    Recruitment Process Outsourcing (RPO)
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={home.how_we_work_swiper_card}>
                  <div className={home.how_we_work_swiper_card_img}>
                    <Image
                      src={"/images/how-we-work2.png"}
                      height={400}
                      width={600}
                      alt=""
                    />
                  </div>
                  <h3 className="pt-sans">Permanent placement </h3>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <div className={home.how_we_work_swiper_card}>
                  <div className={home.how_we_work_swiper_card_img}>
                    <Image
                      src={"/images/how-we-work1.png"}
                      height={400}
                      width={600}
                      alt=""
                    />
                  </div>
                  <h3 className="pt-sans">
                    Recruitment Process Outsourcing (RPO)
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* --------How we work page ends-------------- */}
      {/* --------Sectors page start-------------- */}

      <div
        className={home.sectors_main_page}
        style={{
          background: `url(/images/build-leading-edge.png) no-repeat center/cover `,
        }}
      >
        <div className={`${home.sectors_main_page_container} container`}>
          <div className={`${home.sectors_head_sec} `}>
            <div className={`${home.sectors_head_text_sec} `}>
              <h3>SECTORS</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <Link href={"/"}>
              VIEW ALL
              <div className="button_right_arrow_img">
                <Image
                  src={"/images/p1-btn-arrow.png"}
                  height={16}
                  width={18}
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* --------Sectors page ends-------------- */}
    </div>
  );
};

export default index;
