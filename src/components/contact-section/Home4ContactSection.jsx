"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const defaultMedia = [
    { type: "video", path: "assets/video/home4-contact-video1.mp4" },
    { type: "image", path: "/assets/img/home4/home4-contact-img2.png" },
    { type: "video", path: "assets/video/home4-contact-video2.mp4" },
    { type: "video", path: "assets/video/home4-contact-video3.mp4" },
    { type: "image", path: "/assets/img/home4/home4-contact-img5.png" },
    { type: "image", path: "/assets/img/home4/home4-contact-img6.png" },
];

const Home4ContactSection = ({ data = {} }) => {
    const mediaItems = data.mediaItems?.length === 6 ? data.mediaItems : defaultMedia;
    const cta = { label: "Free Stretagy Session", url: "/contact", ...(data.cta || {}) };
    const contactSectionRef = useRef(null);

    useEffect(() => {
        const contactSection = contactSectionRef.current;

        if (!contactSection) return;

        const observerOptions = {
            root: null,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contactSection.classList.add('active');
                } else {
                    // contactSection.classList.remove('active'); // Uncomment if needed
                }
            });
        }, observerOptions);

        observer.observe(contactSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="home4-contact-section mb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-wrapper">
                                <div className="contact-content">
                                    <div className="section-title2">
                                        <h2><strong>{data.titleLead || "Let’s Start"}</strong> {data.titleTail || "A Project?"}</h2>
                                        <p>{data.descriptionLead || "Get"} <strong>{data.descriptionEmphasis || "30 Minutes"}</strong> {data.descriptionTail || "free call with our marketing expert about your topics or Projects."}</p>
                                    </div>
                                    <div className="home4-contact-btn-area" ref={contactSectionRef}>
                                        <Link href={cta.url} className="primary-btn4">
                                            <span className="icon">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="content">{cta.label}</span>
                                            <span className="icon two">
                                                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <ul className="img-list">
                                            <li>
                                                <video className="video1" autoPlay loop muted playsInline src={mediaItems[0].path} />
                                            </li>
                                            <li><img src={mediaItems[1].path} alt="" /></li>
                                            <li>
                                                <video className="video2" autoPlay loop muted playsInline src={mediaItems[2].path} />
                                            </li>
                                            <li>
                                                <video className="video2" autoPlay loop muted playsInline src={mediaItems[3].path} />
                                            </li>
                                            <li><img src={mediaItems[4].path} alt="" /></li>
                                            <li><img src={mediaItems[5].path} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home4ContactSection
