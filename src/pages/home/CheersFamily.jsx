import React, { useState, useRef, useEffect } from 'react';
import groupSize from '../../assets/images/group-size.png';
import transport from '../../assets/images/transport.png';
import check from '../../assets/images/check.png';
import previous from '../../assets/images/previous.png';
import next from '../../assets/images/next.png';
import previousWhite from '../../assets/images/prev_white.png';
import nextWhite from '../../assets/images/next_white.png';
import personEx from '../../assets/images/person_ex.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import classNames from 'classnames';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CheersFamily = () => {
    const images = [
        {
            src: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            title: "H'Mong Team",
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat totam perferendis, consequatur accusantium cum maiores, quae, sit natus provident blanditiis fugiat praesentium unde quidem deserunt cumque odit. Pariatur, suscipit!',
            numbers: [15, 'Motobike', 159],
        },
        {
            src: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            title: 'Ha Long Team',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat totam perferendis, consequatur accusantium cum maiores, quae, sit natus provident blanditiis fugiat praesentium unde quidem deserunt cumque odit. Pariatur, suscipit!',
            numbers: [16, 'Bicycle', 200],
        },
        {
            src: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            title: 'Pu Luong Team',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellat totam perferendis, consequatur accusantium cum maiores, quae, sit natus provident blanditiis fugiat praesentium unde quidem deserunt cumque odit. Pariatur, suscipit!',
            numbers: [17, 'Car', 222],
        },
    ];
    const slideRef = useRef(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [indexs, setIndexs] = useState([0, 1, 2]);

    const handleChange = (newIndex) => {
        const imageCount = 3;
        const array = [newIndex];
        if (newIndex + 2 <= images.length - 1) {
            array.push(newIndex + 1);
            array.push(newIndex + 2);
        } else if (newIndex + 1 == images.length - 1) {
            array.push(newIndex + 1);
            array.push(0);
        } else {
            array.push(0);
            array.push(1);
        }
        if (array.length === imageCount) {
            setIndexs(array);
        }
    };

    const handleTabChange = (index) => {
        setTabIndex(index);
    };
    const indicators = (index) => <div className="indicator">{index + 1}</div>;
    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ];

    useEffect(function () {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            disable: window.innerWidth < 1280,
        });
    }, []);
    return (
        <section className="flex flex-col overflow-hidden px-4 py-[60px] xl:p-[100px] xl:pb-0 xl:pt-[100px]">
            <div className={classNames('flex-1')}>
                <div className="flex justify-between max-xl:flex-col xl:items-center">
                    <div className="z-10 mb-5 flex flex-col items-start text-primary-70 xl:mb-[34px]">
                        <span
                            data-aos="fade-down"
                            className="xl:text-4 text-3 uppercase"
                        >
                            cheers
                        </span>
                        <h1
                            data-aos="fade-right"
                            className="text-2xl uppercase leading-[28px] xl:text-[48px] xl:leading-[48px]"
                        >
                            family
                        </h1>
                    </div>
                    <nav className="mb-5 max-xl:w-full xl:mb-[30px] xl:mt-10">
                        <ul className="flex w-full items-center gap-[18px] uppercase max-xl:justify-between xl:gap-9">
                            {[
                                'Tour leader',
                                'specialist',
                                'local host',
                                'rider team',
                            ].map((title, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleTabChange(index)}
                                    className={classNames({
                                        'cursor-pointer whitespace-nowrap border-b-2 font-poppins text-[12px] font-semibold leading-4 xl:text-[14px] xl:leading-5': true,
                                        'border-transparent text-[#B7B7B7]':
                                            index != tabIndex,
                                        'border-primary-70 text-primary-70':
                                            index == tabIndex,
                                    })}
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex items-start justify-between max-xl:flex-col">
                {/* content - left - pc */}
                {tabIndex == 0 && (
                    <div className="relative h-full max-xl:order-2">
                        <h5
                            data-aos="fade-up"
                            className="font-poppins text-xl font-semibold max-xl:leading-6 xl:text-[26px] xl:text-gray-scale"
                        >
                            {images[indexs[0]].title}
                        </h5>
                        <p
                            data-aos="fade-up"
                            className="py-3 font-poppins text-[14px] font-normal text-gray-scale xl:w-[450px] xl:py-[30px] xl:pt-2"
                        >
                            {images[indexs[0]].detail}
                        </p>
                        <div className="mb-4 flex flex-col">
                            <ul>
                                <li className="flex items-center font-poppins">
                                    <img
                                        src={groupSize}
                                        alt=""
                                        className="mr-1"
                                    />
                                    <span className="text-[14px] font-semibold text-primary-70">
                                        Group size:
                                    </span>
                                    &nbsp;
                                    <span className="text-[14px] text-gray-scale">
                                        {images[indexs[0]].numbers[0]} members
                                    </span>
                                </li>
                                <li className="flex items-center font-poppins">
                                    <img
                                        src={transport}
                                        alt=""
                                        className="mr-1"
                                    />
                                    <span className="text-[14px] font-semibold text-primary-70">
                                        Transport:
                                    </span>
                                    &nbsp;
                                    <span className="text-[14px] text-gray-scale">
                                        {images[indexs[0]].numbers[1]}
                                    </span>
                                </li>
                                <li className="flex items-center font-poppins">
                                    <img src={check} alt="" className="mr-1" />
                                    <span className="text-[14px] font-semibold text-primary-70">
                                        Trip completed:
                                    </span>
                                    &nbsp;
                                    <span className="text-[14px] text-gray-scale">
                                        {images[indexs[0]].numbers[2]} trips
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="z-10 flex items-center gap-4">
                            <button className="rounded-lg border border-primary-70 bg-primary-70 p-3 px-6 font-poppins font-bold uppercase text-white max-xl:flex-1">
                                join with us
                            </button>
                            <button className="rounded-lg border border-primary-70 p-3 font-poppins font-bold uppercase text-primary-70 max-xl:flex-1">
                                call us
                            </button>
                        </div>
                    </div>
                )}
                {/* items */}
                {tabIndex == 0 && (
                    <div className=" flex w-full select-none items-stretch gap-6 max-xl:mb-5">
                        <div className="ml-auto w-full xl:w-[800px]">
                            <Slide
                                transitionDuration={200}
                                autoplay={false}
                                // indicators={indicators}
                                nextArrow={
                                    <img
                                        src={nextWhite}
                                        alt="ha-giang-loop"
                                        className="mr-3 shadow-2xl"
                                    />
                                }
                                prevArrow={
                                    <img
                                        src={previousWhite}
                                        className="ml-3 shadow-2xl"
                                        alt="ha-giang-loop"
                                    />
                                }
                                ref={slideRef}
                                onChange={(from, to) => handleChange(to)}
                            >
                                {images.map(
                                    ({ src, detail, numbers, title }) => (
                                        <div
                                            className="each-slide flex gap-4 max-xl:w-full"
                                            key={detail}
                                        >
                                            <div
                                                className="rounded-2xl max-xl:w-full xl:w-[90%]"
                                                style={{
                                                    backgroundImage: `url(${src})`,
                                                    backgroundSize: 'cover',
                                                }}
                                            ></div>
                                            {indexs.map((item, index) => {
                                                if (index !== 0) {
                                                    return (
                                                        <button
                                                            className="hidden h-full w-full xl:block xl:w-[100px]"
                                                            key={item}
                                                            onClick={() => {
                                                                slideRef.current.goTo(
                                                                    item,
                                                                );
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    images[item]
                                                                        .src
                                                                }
                                                                alt={
                                                                    images[item]
                                                                        .detail
                                                                }
                                                                className="h-full w-full rounded-2xl object-cover"
                                                            />
                                                        </button>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    ),
                                )}
                            </Slide>
                        </div>
                    </div>
                )}
                {[1, 2, 3].includes(tabIndex) && (
                    <div className="mb-5 flex w-full select-none items-stretch gap-6">
                        <div className="w-full">
                            <Slide
                                responsive={responsiveSettings}
                                // transitionDuration={200}
                                autoplay={false}
                                // indicators={indicators}
                                nextArrow={
                                    <img
                                        src={next}
                                        alt="ha-giang-loop"
                                        className="absolute -right-10 mr-3 shadow-2xl"
                                    />
                                }
                                prevArrow={
                                    <img
                                        src={previous}
                                        className="ml-3 shadow-2xl"
                                        alt="ha-giang-loop"
                                    />
                                }
                                ref={slideRef}
                                onChange={(from, to) => handleChange(to)}
                            >
                                {[1, 2, 3, 4].map((item, index) => (
                                    <div
                                        className={classNames(
                                            `each-slide item flex gap-4 max-xl:w-full`,
                                            {
                                                'px-3':
                                                    index !== 0 &&
                                                    index !==
                                                        [1, 2, 3, 4].length - 1,
                                                'pr-3': index === 0,
                                                'pl-3':
                                                    index ===
                                                    [1, 2, 3, 4].length - 1,
                                            },
                                        )}
                                        key={item}
                                    >
                                        <div
                                            className="group relative flex-1 rounded-2xl"
                                            style={{
                                                backgroundImage: `url(${personEx})`,
                                                backgroundSize: 'cover',
                                            }}
                                        >
                                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-primary-70 p-6 font-poppins text-white opacity-80">
                                                <h1 className="text-center text-base font-semibold leading-6">
                                                    Mrs.Thao
                                                </h1>
                                                <h2 className="">
                                                    <span className="text-sm leading-[22px]">
                                                        Tour Leader
                                                    </span>
                                                    <span> • </span>
                                                    <span className="text-sm leading-[22px]">
                                                        3 years of experiment
                                                    </span>
                                                </h2>
                                            </div>
                                            <div className="desc absolute bottom-0 left-0 right-0 top-full rounded-2xl bg-black/50 p-6 font-poppins text-white duration-200 ease-in group-hover:top-0">
                                                <h1 className="text-center text-base font-semibold leading-6 text-primary-70">
                                                    Mrs.Thao
                                                </h1>
                                                <h2 className="text-center">
                                                    <span className="text-sm leading-[22px] ">
                                                        Tour Leader
                                                    </span>
                                                    <span> • </span>
                                                    <span className="text-sm leading-[22px]">
                                                        3 years of experiment
                                                    </span>
                                                </h2>
                                                <div className="my-4 h-[1px] w-full bg-white"></div>
                                                <p>
                                                    We are always available
                                                    whenever and whenever you
                                                    need any guidance or
                                                    question!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CheersFamily;
