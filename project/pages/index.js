import React from "react";

import home from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {
  EffectCards,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
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
          loop={true}
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
                  className={`${home.gcc_expansion_container_btn} pt-sans`}
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
                  className={`${home.gcc_expansion_container_btn} pt-sans`}
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
              <Link
                href={""}
                className={`${home.build_leading_edge_text_btn} pt-sans`}
              >
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
              <div className={`${home.build_leading_edge_count_card_logo1} `}>
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
              <div className={`${home.build_leading_edge_count_card_logo2} `}>
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
              <div className={`${home.build_leading_edge_count_card_logo3} `}>
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
              <h3 className="pt-sans">SECTORS</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
            </div>
            <Link
              href={"/"}
              className={`${home.sectors_head_view_all_btn} pt-sans`}
            >
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

          <div className={`${home.sectors_card_sec} `}>
            <div className={`${home.sectors_card} `}>
              <div className={`${home.sectors_card_img_background_sec} `}>
                <div className={`${home.sectors_card_img_background} `}>
                  <Image
                    src={"/images/sectors-card-back.png"}
                    height={155}
                    width={161}
                    alt=""
                  />
                </div>
                <div className={`${home.sectors_card_img_logo} `}>
                  <Image
                    src={"/images/sectors-card-img1.png"}
                    height={90}
                    width={90}
                    alt=""
                  />
                </div>
              </div>

              <h3 className="pt-sans">AVIATION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href={"/"} className={`${home.sectors_card_btn} pt-sans`}>
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
            <div className={`${home.sectors_card} `}>
              <div className={`${home.sectors_card_img_background_sec} `}>
                <div className={`${home.sectors_card_img_background} `}>
                  <Image
                    src={"/images/sectors-card-back.png"}
                    height={155}
                    width={161}
                    alt=""
                  />
                </div>
                <div className={`${home.sectors_card_img_logo} `}>
                  <Image
                    src={"/images/sectors-card-img2.png"}
                    height={90}
                    width={90}
                    alt=""
                  />
                </div>
              </div>

              <h3 className="pt-sans">IT AND TELECOMS</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href={"/"} className={`${home.sectors_card_btn} pt-sans`}>
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
            <div className={`${home.sectors_card} `}>
              <div className={`${home.sectors_card_img_background_sec} `}>
                <div className={`${home.sectors_card_img_background} `}>
                  <Image
                    src={"/images/sectors-card-back.png"}
                    height={155}
                    width={161}
                    alt=""
                  />
                </div>
                <div className={`${home.sectors_card_img_logo} `}>
                  <Image
                    src={"/images/sectors-card-img2.png"}
                    height={90}
                    width={90}
                    alt=""
                  />
                </div>
              </div>

              <h3 className="pt-sans">DIGITAL</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href={"/"} className={`${home.sectors_card_btn} pt-sans`}>
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
            <div className={`${home.sectors_card} `}>
              <div className={`${home.sectors_card_img_background_sec} `}>
                <div className={`${home.sectors_card_img_background} `}>
                  <Image
                    src={"/images/sectors-card-back.png"}
                    height={155}
                    width={161}
                    alt=""
                  />
                </div>
                <div className={`${home.sectors_card_img_logo} `}>
                  <Image
                    src={"/images/sectors-card-img1.png"}
                    height={90}
                    width={90}
                    alt=""
                  />
                </div>
              </div>

              <h3 className="pt-sans">EVENT MANAGEMENT</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <Link href={"/"} className={`${home.sectors_card_btn} pt-sans`}>
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
        </div>
      </div>
      {/* --------Sectors page ends-------------- */}

      {/* --------Opportunity accross page starts-------------- */}
      <div className={home.opportunities_main_page}>
        <div className={`${home.opportunities_main_page_container} container`}>
          <div className={home.opportunities_text_sec}>
            <h3 className="pt-sans">OPPORTUNITIES ACROSS THE GCC REGION</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolored exercitation
            </p>
            <Link
              href={"/"}
              className={`${home.opportunities_text_sec_btn} pt-sans`}
            >
              EXPLORE OPPORTUNITIES
              <div className="button_right_arrow_img">
                <Image
                  src={"/images/p1-btn-arrow.png"}
                  height={16}
                  width={18}
                  alt=""
                  style={{ filter: "invert(1)" }}
                />
              </div>{" "}
            </Link>
          </div>
          <div className={home.opportunities_map_sec}>
            <div className={home.opportunities_map_img}>
              <Image
                src={"/images/map-dots.png"}
                height={630}
                width={730}
                alt=""
              />
            </div>

            <div className={home.opportunities_map_btn_group}>
              <Link href={"/"} className={home.opportunities_map_btn}>
                {" "}
                Dubai
              </Link>
              <Link href={"/"} className={home.opportunities_map_btn}>
                {" "}
                Abu Dhabi
              </Link>
              <Link href={"/"} className={home.opportunities_map_btn}>
                {" "}
                Riyadh
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* --------Opportunity accross page ends-------------- */}

      {/* --------Parisima Talent Continues page starts-------------- */}
      <div className={home.parisima_talent_main_page}>
        <div
          className={`${home.parisima_talent_main_page_container} container`}
        >
          <div className={`${home.parisima_talent_page_text_sec} pt-sans`}>
            PARISIMA TALENT CONTINUES GCC EXPANSION WITH NEW OFFICE IN KSA
          </div>

          <div className={home.parisima_talent_background_image}>
            {" "}
            <Image
              src={"/images/parisima-talent-img.png"}
              width={1250}
              height={490}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* --------Parisima Talent Continues page ends-------------- */}

      {/* --------What Our Clients Say page Start-------------- */}
      <div className={home.what_our_clients_say_page}>
        <div
          className={`${home.what_our_clients_say_page_container} container`}
        >
          <div className={`${home.what_our_clients_say_title} pt-sans`}>
            WHAT OUR CLIENTS SAY ABOUT US{" "}
          </div>

          <div className={home.what_our_clients_say_page_content_container}>
            <div className={home.what_our_clients_say_page_text_sec}>
              <h3 className="pt-sans">
                WHAT OUR CLIENTS SAY <br /> ABOUT US
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sagittis nunc sit amet nisl blandit, nec aliquam nisi eleifend.
                Proin vel odio eu sem placerat lacinia ut non nisi. Nam maximus
                nunc ac nisl hendrerit, sit amet mollis nisi molestie. Nulla vel
                nibh eget lectus suscipit iaculis.
              </p>
              <div className={home.what_our_clients_say_page_profile_sec}>
                <div className={home.what_our_clients_say_page_profile_photo}>
                  <Image
                    src={"/images/profile-lady1.png"}
                    height={75}
                    width={75}
                    alt=""
                  />
                </div>
                <div className={home.what_our_clients_say_page_profile_photo}>
                  <Image
                    src={"/images/profile-lady2.png"}
                    height={75}
                    width={75}
                    alt=""
                  />
                </div>
                <div className={home.what_our_clients_say_page_profile_photo}>
                  <Image
                    src={"/images/profile-lady3.png"}
                    height={75}
                    width={75}
                    alt=""
                  />
                </div>
                <div className={home.what_our_clients_say_page_profile_photo}>
                  <Image
                    src={"/images/profile-lady4.png"}
                    height={75}
                    width={75}
                    alt=""
                  />
                </div>
              </div>
              <div
                className={`${home.what_our_clients_say_page_rating_sec} pt-sans`}
              >
                <div
                  className={`${home.what_our_clients_say_page_rating_icon} `}
                >
                  {" "}
                  <Image
                    src={"/images/rating.png"}
                    height={19}
                    width={20}
                    alt=""
                  />
                </div>
                <b style={{ color: "black" }}>5.0</b> (5000 reviews)
              </div>
            </div>
            {/* ///////// */}
            <div className={home.what_our_clients_say_page_slide_sec}>
              <div
                className={home.what_our_clients_say_page_slide_prev_btn}
                id="what_our_clients_say_page_slide_prev_btn"
              >
                <div className={home.what_our_clients_say_page_slide_btn_image}>
                  <Image
                    src={"/images/btn-arrow1.png"}
                    height={14}
                    width={7}
                    alt=""
                  />
                </div>{" "}
              </div>
              <div
                className={home.what_our_clients_say_page_slide_next_btn}
                id="what_our_clients_say_page_slide_next_btn"
              >
                <div className={home.what_our_clients_say_page_slide_btn_image}>
                  <Image
                    src={"/images/btn-arrow1.png"}
                    height={14}
                    width={7}
                    alt=""
                    style={{ transform: "rotate(180deg)" }}
                  />
                </div>{" "}
              </div>
              <Swiper
                effect={"cards"}
                // grabCursor={true}
                direction="vertical"
                navigation={{
                  nextEl: "#what_our_clients_say_page_slide_next_btn",
                  prevEl: "#what_our_clients_say_page_slide_prev_btn",
                }}
                modules={[EffectCards, Navigation]}
                className={` mySwiper ${home.what_our_clients_say_page_slider}`}
              >
                <SwiperSlide>
                  <div className={home.what_our_clients_say_page_slide_card}>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_profile
                      }
                    >
                      <Image
                        src={"/images/profile-lady1.png"}
                        height={108}
                        width={108}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_quote_icon
                      }
                    >
                      <Image
                        src={"/images/quote-mark.png"}
                        height={63}
                        width={63}
                        alt=""
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis egestas id orci in sodales. Sed commodo orci
                      consectetur ultrices scelerisque. Aliquam a finibus velit.
                      Maecenas at nisi finibus, lacinia augue eu, vehicula arcu.
                      Praesent et magna nisl. Quisque congue orci eu nulla
                      consectetur tincidunt. Sed ullamcorper rutrum mi, sed
                      gravida augue porttitor...”
                    </p>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_rating_sec
                      }
                    >
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="pt-sans">John Dae</h4>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className={home.what_our_clients_say_page_slide_card}>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_profile
                      }
                    >
                      <Image
                        src={"/images/profile-lady1.png"}
                        height={108}
                        width={108}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_quote_icon
                      }
                    >
                      <Image
                        src={"/images/quote-mark.png"}
                        height={63}
                        width={63}
                        alt=""
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis egestas id orci in sodales. Sed commodo orci
                      consectetur ultrices scelerisque. Aliquam a finibus velit.
                      Maecenas at nisi finibus, lacinia augue eu, vehicula arcu.
                      Praesent et magna nisl. Quisque congue orci eu nulla
                      consectetur tincidunt. Sed ullamcorper rutrum mi, sed
                      gravida augue porttitor...”
                    </p>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_rating_sec
                      }
                    >
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="pt-sans">John Dae</h4>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className={home.what_our_clients_say_page_slide_card}>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_profile
                      }
                    >
                      <Image
                        src={"/images/profile-lady1.png"}
                        height={108}
                        width={108}
                        alt=""
                      />
                    </div>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_quote_icon
                      }
                    >
                      <Image
                        src={"/images/quote-mark.png"}
                        height={63}
                        width={63}
                        alt=""
                      />
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis egestas id orci in sodales. Sed commodo orci
                      consectetur ultrices scelerisque. Aliquam a finibus velit.
                      Maecenas at nisi finibus, lacinia augue eu, vehicula arcu.
                      Praesent et magna nisl. Quisque congue orci eu nulla
                      consectetur tincidunt. Sed ullamcorper rutrum mi, sed
                      gravida augue porttitor...”
                    </p>
                    <div
                      className={
                        home.what_our_clients_say_page_slide_card_rating_sec
                      }
                    >
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                      <div
                        className={
                          home.what_our_clients_say_page_slide_card_rating_icon
                        }
                      >
                        <Image
                          src={"/images/rating.png"}
                          height={19}
                          width={20}
                          alt=""
                        />
                      </div>
                    </div>
                    <h4 className="pt-sans">John Dae</h4>
                  </div>
                </SwiperSlide>{" "}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* --------What Our Clients Say page ends-------------- */}
      {/* --------Insights page Start-------------- */}

      <div className={home.insights_page}>
        <div className={`${home.insights_page_container} container`}>
          <h3 className={`${home.insights_page_title} pt-sans`}>INSIGHTS</h3>

          <p>Get the latest news and updates from our blog</p>
          {/* --------Top Section-------- */}

          <div className={home.insights_page_card_sec}>
            <div
              className={home.insights_page_card1}
              style={{
                background: `url(/images/insights-card1-back.png) no-repeat center/cover `,
              }}
            >
              <span>12 July, 2022</span>
              <h3 className="pt-sans">
                Dulsco acquires Parisima Talent as part of an expansion plan
              </h3>{" "}
            </div>

            <div className={home.insights_page_card2}>
              <div className={home.insights_page_card2_img}>
                <Image
                  src={"/images/insights-card2-img.png"}
                  height={295}
                  width={505}
                  alt=""
                />
              </div>
              <span>26 September, 2019</span>
              <h3 className="pt-sans">
                Parisima Talent wins two awards at the Gulf Capital SME Awards
                2019
              </h3>
              <p>
                Parisima, a strategic talent advisory and delivery business, is
                pleased to announce that it has won B2B...
              </p>
            </div>
          </div>
          {/* --------Top Section ends-------- */}

          {/* --------Bottom Section-------- */}
          <div className={home.insights_page_card_sec}>
            <div
              className={home.insights_page_card1}
              style={{
                background: `url(/images/insights-card4-back.png) no-repeat center/cover `,
              }}
            >
              <span>09 September, 2019</span>
              <h3 className="pt-sans">
                Delivering Recruitment Process Outsourcing (RPO) solutions
                across EMEA{" "}
              </h3>{" "}
            </div>

            <div className={home.insights_page_card2}>
              <div className={home.insights_page_card2_img}>
                <Image
                  src={"/images/insights-card3-img.png"}
                  height={295}
                  width={505}
                  alt=""
                />
              </div>
              <span>26 September, 2019</span>
              <h3 className="pt-sans">
                Parisima Talent continues GCC expansion with new office in KSA
              </h3>
              <p>
                Strategic talent acquisition business Parisima Talent – a part
                of Dulsco Group...
              </p>
            </div>
          </div>
          {/* --------Bottom Section end-------- */}

          <Link href={"/"} className={`${home.insights_page_btn} pt-sans`}>
            {" "}
            VIEW ALL
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
      </div>

      {/* --------Insights page ends-------------- */}
      {/* --------Learn more about the group page Start-------------- */}
      <div className={home.learn_more_about_the_group_page}>
        <div
          className={`${home.learn_more_about_the_group_page_container} container`}
        >
          <h3 className="pt-sans">LEARN MORE ABOUT THE GROUPS</h3>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry &apos;s standard dummy
            text ever since the 1500s.
          </p>{" "}
          <div className={home.learn_more_about_the_group_page_card_sec}>
            <div className={home.learn_more_about_the_group_page_card}>
              <div className={home.learn_more_about_the_group_page_card_img}>
                <Image
                  src={"/images/learn-more-logo1.png"}
                  height={38}
                  width={128}
                  alt=""
                />
              </div>
            </div>
            <div className={home.learn_more_about_the_group_page_card}>
              <div className={home.learn_more_about_the_group_page_card_img}>
                <Image
                  src={"/images/learn-more-logo2.png"}
                  height={67}
                  width={100}
                  alt=""
                />
              </div>
            </div>
            <div className={home.learn_more_about_the_group_page_card}>
              <div className={home.learn_more_about_the_group_page_card_img}>
                <Image
                  src={"/images/learn-more-logo3.png"}
                  height={65}
                  width={177}
                  alt=""
                />
              </div>
            </div>
            <div className={home.learn_more_about_the_group_page_card}>
              <div className={home.learn_more_about_the_group_page_card_img}>
                <Image
                  src={"/images/learn-more-logo4.png"}
                  height={51}
                  width={133}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------Learn more about the group page ends-------------- */}

      {/* --------Social Hub page Start-------------- */}
      <div className={home.social_hub_page}>
        <div className={`${home.social_hub_page_container} `}>
          <h3 className="pt-sans">SOCIAL HUB</h3>

          <div className={home.social_hub_slider_sec}>
            <Swiper
              pagination={false}
              modules={[Pagination, Navigation]}
              slidesPerView={5}
              navigation={{
                prevEl: "#social_hub_slider_prev_btn",
                nextEl: "#social_hub_slider_next_btn",
              }}
              spaceBetween={50}
              speed={1000}
              // loop={true}
              className="mySwiper"
            >
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img1.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img2.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img3.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img4.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img5.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img1.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img1.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img2.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img3.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img4.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img5.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className={home.social_hub_slider_sec_pt_70}>
                <div className={home.social_hub_slider_img}>
                  <Image
                    src={"/images/socialhub-img1.png"}
                    height={353}
                    width={353}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={home.social_hub_slider_btn_sec}>
            <div
              href={"/"}
              className={home.social_hub_slider_btn}
              id="social_hub_slider_prev_btn"
            >
              <div className={home.social_hub_slider_btn_img}>
                {" "}
                <Image
                  src={"/images/btn-arrow1.png"}
                  height={14}
                  width={7}
                  alt=""
                />
              </div>{" "}
            </div>
            <div
              href={"/"}
              className={home.social_hub_slider_btn}
              id="social_hub_slider_next_btn"
            >
              <div className={home.social_hub_slider_btn_img}>
                {" "}
                <Image
                  src={"/images/btn-arrow1.png"}
                  height={14}
                  width={7}
                  alt=""
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* --------Social Hub page end-------------- */}
    </div>
  );
};

export default index;
