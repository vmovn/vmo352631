"use client";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Link from "next/link";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);


const defaultMembers = [
    ["Mr. Jorche Milton", "(CTO, Co-founder)", "team-img1.png", "emoji1.gif"],
    ["Robert Jhonson", "(Marketing Head)", "team-img2.png", "emoji2.gif"],
    ["Daniel Ryan", "(Sr. Marketing Manager)", "team-img3.png", "emoji1.gif"],
    ["Mrs. Emily Sophia", "(Jr. Marketing Manager)", "team-img4.png", "emoji3.gif"],
    ["Alexander Benjamin", "(WordPress Developer)", "team-img5.png", "emoji1.gif"],
    ["Lucy Zoe", "(Junior Engineer)", "team-img6.png", "emoji2.gif"],
].map(([name, role, image, emoji]) => ({
    name,
    role,
    imagePath: `/assets/img/home4/${image}`,
    emojiPath: `/assets/img/home4/${emoji}`,
    linkedinURL: "https://www.linkedin.com/",
}));

const Home4TeamSection = ({ data = {} }) => {
    const members = defaultMembers.map((fallback, index) => ({ ...fallback, ...(data.teamMembers?.[index] || {}) }));

    const settings = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <>
            <div className="home4-team-section mb-130">
                <div className="container">
                    <div className="row justify-content-lg-end mb-70">
                        <div className="col-xl-10 col-lg-11">
                            <div className="row g-4 justify-content-between align-items-end">
                                <div className="col-xl-5 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="section-title2">
                                        <h2><strong>{data.teamTitleLead || "We’ve Most"}</strong> {data.teamTitleTail || "Talented Team."}</h2>
                                        <p>{data.teamDescription || "To provide most expensive work for our clients in the world-wide."}</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex justify-content-md-end wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="button-area">
                                        <svg className="arrow" width={268} height={108} viewBox="0 0 268 108" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M68 105L63 102.113V107.887L68 105ZM2 105L1.6746 104.62L0.648371 105.5H2V105ZM58 57L58.3254 57.3796L58.6308 57.1178L58.4405 56.7634L58 57ZM29 3V2.5H28.1639L28.5595 3.23656L29 3ZM263 3.5L268 5.88675V0.113249L263 2.5V3.5ZM63.5 104.5H2V105.5H63.5V104.5ZM2.3254 105.38L58.3254 57.3796L57.6746 56.6204L1.6746 104.62L2.3254 105.38ZM58.4405 56.7634L29.4405 2.76344L28.5595 3.23656L57.5595 57.2366L58.4405 56.7634ZM29 3.5H263.5V2.5H29V3.5Z" />
                                        </svg>
                                        <h5>We’re Hiring
                                            <img src="/assets/img/home4/eye-blink.gif" alt="" />
                                        </h5>
                                        <Link href="/career" className="primary-btn4 black-bg">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">Join Our Team</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-50">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home4-team-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[0].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[0].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[0].name}</Link></h5>
                                                <span>{members[0].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[0].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[1].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[1].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[1].name}</Link></h5>
                                                <span>{members[1].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[1].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[2].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[2].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[2].name}</Link></h5>
                                                <span>{members[2].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[2].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[3].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[3].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[3].name}</Link></h5>
                                                <span>{members[3].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[3].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[4].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[4].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[4].name}</Link></h5>
                                                <span>{members[4].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[4].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="team-card">
                                            <div className="team-img">
                                                <Link href="/team/details"><img src={members[5].imagePath} alt="" /></Link>
                                                <div className="emoji-area">
                                                    <img src="/assets/img/home4/emoji-bg.png" alt="" />
                                                    <img src={members[5].emojiPath} alt="" className="emoji" />
                                                </div>
                                            </div>
                                            <div className="team-content">
                                                <h5><Link href="/team/details">{members[5].name}</Link></h5>
                                                <span>{members[5].role}</span>
                                                <svg className="divider" height={6} viewBox="0 0 312 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM307 3.5L312 5.88675V0.113249L307 2.5V3.5ZM4.5 3.5H307.5V2.5H4.5V3.5Z" />
                                                </svg>
                                                <ul className="social-list">
                                                    <li>
                                                        <a href={members[5].linkedinURL} className="social-area">
                                                            <div className="icon">
                                                                <i className="bx bxl-linkedin" />
                                                            </div>
                                                            <div className="content">
                                                                <span>LinkedIn</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="swiper-pagination1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home4TeamSection
