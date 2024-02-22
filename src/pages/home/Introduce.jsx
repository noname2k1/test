import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Video1 from '../../assets/videos/lake.mp4';
import Video2 from '../../assets/videos/waterfall.mp4';
import sign1 from '../../assets/images/introduces/1.jpg';
import sign2 from '../../assets/images/introduces/2.jpg';
import sign3 from '../../assets/images/introduces/3.jpg';
import sign4 from '../../assets/images/introduces/4.jpg';
import specBtn from '../../assets/images/spec-btn.png';
import vietnam from '../../assets/images/vietnam.png';
import bookNowBtn from '../../assets/images/book-now-btn.png';
import bookNowMobileBtn from '../../assets/images/book-now-mobile.png';
import {
    IoVolumeMuteOutline,
    IoVolumeHighOutline,
    IoArrowBack,
    IoArrowForward,
} from 'react-icons/io5';
import { TbAward, TbMap, TbBus } from 'react-icons/tb';
import './introduce.scss';
import Header from '../../components/partials/Header';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VIDEOS = [
    {
        id: 0,
        video: Video1,
    },
    {
        id: 1,
        video: Video2,
    },
];

const Introduce = () => {
    const main = useRef();
    const captionRef = useRef(null);
    const elementRef = useRef(null);
    const [videoIndex, setVideoIndex] = useState(0);
    const [muted, setMuted] = useState(true);
    const [headerShown, setHeaderShown] = useState(false);
    const handleSetVideo = (action) => {
        if (action == 'prev' && videoIndex == 0) {
            setVideoIndex(VIDEOS.length - 1);
            return;
        }
        if (action == 'next' && videoIndex == VIDEOS.length - 1) {
            setVideoIndex(0);
            return;
        }
        if (action == 'prev') {
            setVideoIndex((prev) => prev - 1);
        }
        if (action == 'next') {
            setVideoIndex((prev) => prev + 1);
        }
    };

    const handleToggleMuted = () => {
        setMuted((muted) => !muted);
    };

    useGSAP(
        () => {
            gsap.matchMedia().add('(min-width: 1280px)', () => {
                gsap.to('.box-left', {
                    x: -280,
                    scrollTrigger: {
                        trigger: '.box-left',
                        start: 'top 70%',
                        end: 'bottom bottom',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                    },
                });
                gsap.to('.box-right', {
                    x: 280,
                    scrollTrigger: {
                        trigger: '.box-right',
                        start: 'top 70%',
                        end: 'bottom bottom',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                    },
                });

                const windowWidth = window.innerWidth;
                const videoWidth = elementRef.current.offsetWidth;
                const windowHeight = window.innerHeight;
                const videoHeight = elementRef.current.offsetHeight;

                const scaleX = windowWidth / videoWidth;
                const scaleY = windowHeight / videoHeight;

                gsap.to('.caption', {
                    scrollTrigger: {
                        trigger: '.caption',
                        start: 'top center',
                        end: 'bottom bottom',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                        onEnter: (e) => {
                            e.trigger.style.top = '-10%';
                            e.trigger.style.color = '#fff';
                            e.trigger.style.transform =
                                'scale(0.5) translateX(-100%)';
                            e.trigger.querySelector('.country').style.color =
                                'inherit';
                            e.trigger.querySelector('.country').style.fontSize =
                                '50px';
                            e.trigger.querySelector(
                                '.country',
                            ).style.lineHeight = '140px';
                        },
                        onLeaveBack: (e) => {
                            e.trigger.style.top = '-40%';
                            e.trigger.style.color = '#B34B1E';
                            e.trigger.style.transform =
                                'scale(1) translateX(-50%)';
                            e.trigger.querySelector('.country').style.color =
                                '#FFD772';
                            e.trigger.querySelector('.country').style.fontSize =
                                '128px';
                            e.trigger.querySelector(
                                '.country',
                            ).style.lineHeight = '300px';
                        },
                    },
                });
                gsap.to('.video-overlay', {
                    scrollTrigger: {
                        trigger: '.video-overlay',
                        start: 'top 80%',
                        end: 'bottom bottom',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                        onEnter: (e) => {
                            e.trigger.classList.replace(
                                'bottom-full',
                                'bottom-0',
                            );
                        },
                        onLeaveBack: (e) => {
                            e.trigger.classList.replace(
                                'bottom-0',
                                'bottom-full',
                            );
                        },
                    },
                });
                // console.log({ scaleX, scaleY });
                gsap.to('.video', {
                    scaleX,
                    scaleY,
                    scrollTrigger: {
                        trigger: '.video',
                        start: 'top 80%',
                        end: 'bottom bottom',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                    },
                });
                gsap.to('.video-tag', {
                    scrollTrigger: {
                        trigger: '.video-tag',
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1.5,
                        toggleActions: 'restart complete reverse reset',
                        onEnter: () => {
                            console.log('enter');
                            setHeaderShown(true);
                        },
                        onLeave: () => {
                            console.log('leave');
                            setHeaderShown(false);
                        },
                        onLeaveBack: () => {
                            console.log('leaveback');
                            setHeaderShown(false);
                        },
                    },
                });
            });
        },
        { scope: main },
    );

    return (
        <section className="introduce-wrapper relative flex flex-col overflow-hidden xl:pt-[100px]">
            <div
                className="relative flex h-fit w-screen items-center justify-center text-primary-70"
                ref={main}
            >
                <div className="box-left absolute -left-[100px] top-0 flex w-[372px] flex-col items-start gap-[30px] opacity-40 max-xl:hidden">
                    <img
                        src={sign1}
                        alt=""
                        className="h-[249px] w-[249px] rounded-2xl"
                    />
                    <img src={sign2} alt="" className="rounded-2xl" />
                </div>
                <div
                    className="video relative h-[450px] max-h-[100vh] w-[800px] max-w-[100vw] max-xl:h-screen max-xl:w-full xl:mt-[140px]"
                    ref={elementRef}
                >
                    <video
                        src={VIDEOS[videoIndex]?.video}
                        autoPlay
                        muted={muted}
                        loop
                        className="video-tag h-full w-full object-cover"
                    ></video>
                    {/* overlay */}
                    <div className="video-overlay absolute inset-0 bottom-full rounded-b-xl border-gray-scale bg-black/15 shadow-xl duration-1000 max-xl:bottom-0"></div>
                    <button
                        onClick={() => handleSetVideo('prev')}
                        className="absolute bottom-1/2 left-14 translate-y-1/2 text-white max-xl:left-6"
                    >
                        <IoArrowBack />
                    </button>
                    <button
                        onClick={() => handleSetVideo('next')}
                        className="absolute bottom-1/2 right-14 translate-y-1/2 text-white max-xl:right-6"
                    >
                        <IoArrowForward />
                    </button>
                    <button
                        className="absolute bottom-10 right-14 text-white max-xl:bottom-5 max-xl:right-5"
                        onClick={handleToggleMuted}
                    >
                        {muted ? (
                            <IoVolumeMuteOutline />
                        ) : (
                            <IoVolumeHighOutline />
                        )}
                    </button>
                    {/* awards */}
                    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-4 font-poppins text-white max-xl:left-20 max-xl:flex-col max-xl:items-start">
                        <div className="flex items-center max-xl:gap-2 xl:flex-col">
                            <TbAward color="yellow" size={30} />
                            <div className="flex flex-col xl:items-center">
                                <h5 className="text-xs font-semibold">
                                    Top #1
                                </h5>
                                <p className="text-[8px]">
                                    Epic loop in Vietnam
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center max-xl:gap-2 xl:flex-col">
                            <TbMap color="yellow" size={30} />
                            <div className="flex flex-col xl:items-center">
                                <h5 className="text-xs font-semibold">
                                    300 km
                                </h5>
                                <p className="text-[8px]">North of Hanoi</p>
                            </div>
                        </div>
                        <div className="flex items-center max-xl:gap-2 xl:flex-col">
                            <TbBus color="yellow" size={30} />
                            <div className="flex flex-col xl:items-center">
                                <h5 className="text-xs font-semibold">
                                    6 hours
                                </h5>
                                <p className="text-[8px]">Bus drive</p>
                            </div>
                        </div>
                    </div>
                    {/* caption */}
                    <div
                        className="caption absolute -top-[40%] left-1/2 flex -translate-x-1/2 flex-col items-center duration-700 ease-linear max-xl:top-[-5%] max-xl:scale-[0.5] max-xl:text-white"
                        ref={captionRef}
                    >
                        <span className="text-4 uppercase leading-10">
                            Welcome
                        </span>
                        <h1 className="whitespace-nowrap text-[48px] uppercase leading-[48px]">
                            Ha giang loop
                        </h1>
                        <span className="country font-tomatoes text-9xl leading-[300px] text-[#FFD772] duration-700 max-xl:text-[50px] max-xl:leading-[140px] max-xl:text-white">
                            Vietnam
                        </span>
                    </div>
                </div>
                <div className="box-right absolute -right-[100px] top-0 flex w-[372px] flex-col items-end gap-[30px] opacity-40 max-xl:hidden">
                    <img src={sign3} alt="" className="rounded-2xl" />
                    <img
                        src={sign4}
                        alt=""
                        className="h-[249px] w-[249px] rounded-2xl"
                    />
                </div>
            </div>

            <div className="flex px-4 pt-[60px] max-xl:flex-col xl:px-[100px] xl:pt-[240px]">
                <div className="z-10 mb-[34px] flex flex-col items-start text-primary-70 xl:hidden">
                    <span className="text-xs uppercase">start with</span>
                    <h1 className="text-2xl uppercase leading-[28px]">
                        Ha giang
                    </h1>
                    <h1 className="text-2xl uppercase leading-[28px]">
                        cheers tour
                    </h1>
                </div>
                <div className="max-xl:order-2">
                    <div className="z-10 mb-[34px] hidden flex-col items-start text-primary-70 xl:flex">
                        <span className="text-4 uppercase">start with</span>
                        <h1 className="text-[48px] uppercase leading-[48px]">
                            Ha giang
                        </h1>
                        <h1 className="text-[48px] uppercase leading-[48px]">
                            cheers tour
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="flex gap-4 max-xl:mt-5 max-xl:overflow-x-auto xl:flex-col">
                            <div className="flex items-center gap-1 xl:gap-4">
                                <button className="relative flex items-center justify-center uppercase max-xl:w-[calc(100vw-50px)]">
                                    <img src={specBtn} alt="" />
                                    <span className="absolute inline-block whitespace-nowrap font-poppins text-[14px] font-bold text-white">
                                        support local - sustainable travel
                                    </span>
                                </button>
                                <button className="relative flex items-center justify-center uppercase max-xl:w-[calc(100vw-50px)]">
                                    <img src={specBtn} alt="" />
                                    <span className="absolute inline-block whitespace-nowrap font-poppins text-[14px] font-bold text-white">
                                        free 100% cancellation
                                    </span>
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="relative flex items-center justify-center uppercase max-xl:w-[calc(100vw-50px)]">
                                    <img src={specBtn} alt="" />
                                    <span className="absolute inline-block whitespace-nowrap font-poppins text-[14px] font-bold text-white">
                                        daily departures
                                    </span>
                                </button>
                                <button className="relative flex items-center justify-center uppercase max-xl:w-[calc(100vw-50px)]">
                                    <img src={specBtn} alt="" />
                                    <span className="absolute inline-block whitespace-nowrap font-poppins text-[14px] font-bold text-white">
                                        no happy - full refund
                                    </span>
                                </button>
                            </div>
                        </div>
                        <p className="py-[30px] font-poppins font-normal">
                            The 3 Days Epic Ha giang Loop Tour with easy rider
                            organized by <strong>Vietnam Cheers Hostel</strong>{' '}
                            is a must in Vietnam for any traveller. It is
                            considered a highlight of South East Asia. Explore{' '}
                            <strong>Ma Pi Leng</strong>, one of The Big Four
                            Passes in Vietnam, through thousands of conical
                            limestone peaks as well as deep and meandering
                            valleys. Party dinner, waterfall and local le at
                            authentic <strong>Cheers Du Gia Homestay</strong>.
                            will be the unique experience also. This is designed
                            for adventure-seekers — those who want to experience
                            the biggest challenge Vietnam has to offer in a safe
                            environment with our experienced easy riders.
                        </p>
                        <div className="z-10 flex items-center gap-4">
                            <button className="rounded-lg border border-primary-70 bg-primary-70 p-3 px-6 font-poppins font-bold uppercase text-white max-xl:flex-1">
                                book now
                            </button>
                            <button className="rounded-lg border border-primary-70 p-3 px-6 font-poppins font-bold uppercase text-primary-70 max-xl:flex-1">
                                read more
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    src={vietnam}
                    alt="vietnam-map"
                    className="max-xl:order-1"
                />
            </div>
            <Header fixed={headerShown} />
        </section>
    );
};

export default Introduce;
