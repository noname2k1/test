import React, { useState } from 'react';
import {
    Call,
    Driver,
    Facebook,
    Hamburger,
    House,
    Location,
    Logo,
    Mail,
    Transport,
    Youtube,
} from '../../assets/images';
import { FaAngleDown, FaCheck } from 'react-icons/fa';

import CustomButton from '../../components/customs/CustomButton';
const TOURS = [
    {
        id: 0,
        label: 'ha giang tour (3n3d)',
        value: 0,
        price_basic: 10,
        price_big: 20,
    },
    {
        id: 1,
        label: 'ha giang tour (4n4d)',
        value: 1,
        price_basic: 20,
        price_big: 30,
    },
];
const HEADER_ITEMS = [
    { id: 0, label: 'Home', link: '' },
    { id: 1, label: 'About us', link: '' },
    { id: 2, label: 'Tour', link: '', children: TOURS },
    { id: 3, label: 'Destinations', link: '' },
    { id: 4, label: 'blog', link: '' },
    { id: 5, label: 'faq', link: '' },
    { id: 6, label: 'contact', link: '' },
    { id: 7, label: 'vietnam cheers hotel', link: '' },
];
const Banner = ({ callback = () => {} }) => {
    const [selectedValue, setSelectedValue] = useState(0);
    const [listOpen, setListOpen] = useState(false);
    const [basicPax, setBasicPax] = useState(1);
    const [bigPax, setBigPax] = useState(1);

    const handleToggleList = () => {
        setListOpen((prev) => !prev);
    };
    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setListOpen(false);
    };

    const handleIncrease = (type) => {
        if (type == 'basic') {
            setBasicPax((prev) => prev + 1);
        } else {
            setBigPax((prev) => prev + 1);
        }
    };

    const handleDecrease = (type) => {
        if (type == 'basic' && basicPax > 1) {
            setBasicPax((prev) => prev - 1);
        } else if (bigPax > 1) {
            setBigPax((prev) => prev - 1);
        }
    };

    return (
        <section className="relative flex h-screen flex-col items-center bg-[url(./assets/images/bg.jpg)] bg-cover bg-center bg-no-repeat px-4 pt-6 xl:px-[100px]">
            <div className="absolute inset-0 bg-black/10"></div>
            <a href="/" className="block w-full xl:hidden">
                <Logo />
            </a>
            <header className="relative flex h-[96px] w-full items-center justify-between rounded-2xl bg-white px-[30px] max-xl:hidden">
                <a href="/">
                    <Logo />
                </a>
                <nav className="">
                    <ul className="flex gap-10">
                        {HEADER_ITEMS.map((item) => (
                            <li
                                className="group relative flex items-center gap-1 text-[14px] font-bold uppercase"
                                key={item.id}
                            >
                                <a
                                    href={item.children ? '#' : item.link}
                                    className="group flex translate-y-2 flex-col items-center gap-1 duration-200 hover:translate-y-0 hover:text-primary-70"
                                >
                                    <span className="flex items-center gap-1">
                                        {item.label}{' '}
                                        {item.children && <FaAngleDown />}
                                    </span>
                                    <span className="h-2 w-2 rounded-full bg-primary-70 opacity-0 duration-200 group-hover:block group-hover:opacity-100"></span>
                                </a>
                                {item.children && (
                                    <ul className="invisible absolute left-1/2 top-[calc(100%+4px)] -translate-x-1/2 rounded-lg border bg-white p-1 drop-shadow-lg duration-200 group-hover:visible group-hover:translate-y-2">
                                        {TOURS.map((tour) => (
                                            <li
                                                onClick={() =>
                                                    handleOptionSelect(
                                                        tour.value,
                                                    )
                                                }
                                                key={tour.id}
                                                className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md px-6 py-2 font-poppins text-base font-bold uppercase hover:bg-blue-50"
                                            >
                                                {tour.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center justify-center gap-2">
                    <CustomButton rounded classes="w-7 h-7">
                        <Facebook />
                    </CustomButton>
                    <CustomButton rounded classes="w-7 h-7">
                        <Youtube />
                    </CustomButton>
                </div>
            </header>

            {/* back to nature */}
            <div className="relative my-auto flex h-[72px] w-[250px] xl:min-h-[153px] xl:min-w-[646px]">
                <span className="absolute flex-1 text-2xl font-bold uppercase text-white max-xl:leading-6 xl:text-[64px]">
                    Back To
                </span>
                <span className="tomatoes ml-auto mt-auto text-[60px] text-white max-xl:leading-[84px] xl:text-[128px]">
                    nature
                </span>
            </div>

            {/* Tour Bar */}
            <div className="relative mb-[14px] flex select-none items-center justify-center rounded-xl bg-white px-4 py-5 max-xl:flex-col xl:mb-[42px] xl:px-[30px]">
                <div className="max-xl:w-full xl:min-w-[300px] xl:pr-7">
                    <h2 className="mb-2 whitespace-nowrap font-poppins font-light uppercase">
                        Tour
                    </h2>
                    <div className="relative flex w-full items-center">
                        <Location />
                        <h3
                            onClick={handleToggleList}
                            className="ml-1 mr-auto flex w-full cursor-pointer items-center justify-between whitespace-nowrap font-poppins text-base font-bold uppercase"
                        >
                            {
                                TOURS.find(
                                    (tour) => tour.value == selectedValue,
                                ).label
                            }
                            <FaAngleDown />
                        </h3>
                        {listOpen && (
                            <ul className="absolute rounded-lg border bg-white p-1 drop-shadow-lg max-xl:top-full max-xl:w-full xl:bottom-[calc(100%+4px)]">
                                {TOURS.map((tour) => (
                                    <li
                                        onClick={() =>
                                            handleOptionSelect(tour.value)
                                        }
                                        key={tour.id}
                                        className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md px-6 py-2 font-poppins text-base font-bold uppercase hover:bg-blue-50 max-xl:justify-center"
                                    >
                                        <span className="h-4 w-4">
                                            {tour.value == selectedValue && (
                                                <FaCheck />
                                            )}
                                        </span>
                                        {tour.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="h-0.5 w-[34px] bg-gray-scale-5 max-xl:mt-6 max-xl:h-[0.5px] max-xl:w-full xl:rotate-90"></div>
                <div className="flex items-center max-xl:py-6">
                    <div className="max-xl:pr-6 xl:min-w-[256px] xl:px-7">
                        <h2 className="mb-2 whitespace-nowrap font-poppins font-light uppercase">
                            self - driving
                        </h2>
                        <div className="flex w-full items-center">
                            <Driver />
                            <h3 className="mx-2 font-poppins text-base font-bold xl:ml-1 xl:mr-auto">
                                {basicPax} pax
                            </h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleIncrease('basic')}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border font-poppins text-xl shadow-md"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => handleDecrease('basic')}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border font-poppins text-xl shadow-md"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-0.5 rotate-90 border-l-[34px] border-gray-scale-5 max-xl:hidden"></div>
                    <div className="xl:min-w-[256px] xl:px-7">
                        <h2 className="mb-2 whitespace-nowrap font-poppins font-light uppercase">
                            private driver
                        </h2>
                        <div className="flex w-full items-center">
                            <Driver />
                            <h3 className="mx-2 font-poppins text-base font-bold xl:ml-1 xl:mr-auto">
                                {bigPax} pax
                            </h3>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleIncrease('big')}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border font-poppins text-xl shadow-md"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => handleDecrease('big')}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border font-poppins text-xl shadow-md"
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomButton classes="px-6 py-3 rounded-[8px] border border-primary-70 max-xl:w-full">
                    <div className="flex items-center text-white max-xl:w-full max-xl:justify-between xl:flex-col xl:justify-center">
                        <h5 className="price font-poppins text-[26px] font-bold">
                            $
                            {TOURS.find((tour) => tour.value == selectedValue)
                                .price_basic *
                                basicPax +
                                TOURS.find(
                                    (tour) => tour.value == selectedValue,
                                ).price_big *
                                    bigPax}
                        </h5>
                        <span className="font-poppins text-[14px] font-bold uppercase">
                            book now
                        </span>
                    </div>
                </CustomButton>
            </div>
            {/* nav mobile */}
            <nav className="relative w-screen font-poppins font-medium xl:hidden">
                <ul className="flex w-full items-center justify-between bg-white p-4">
                    <li className="flex cursor-pointer flex-col items-center">
                        <span className="grid h-4 w-4 place-items-center">
                            <House />
                        </span>
                        <span className="text-[10px] leading-4 text-primary-70">
                            Home
                        </span>
                    </li>
                    <li className="flex cursor-pointer flex-col items-center">
                        <span className="grid h-4 w-4 place-items-center">
                            <Transport color="#000" />
                        </span>
                        <span className="text-[10px] leading-4">Tour</span>
                    </li>
                    <li className="flex cursor-pointer flex-col items-center">
                        <span className="grid h-4 w-4 place-items-center">
                            <Call color="#000" />
                        </span>
                        <span className="text-[10px] leading-4">WhatsApp</span>
                    </li>
                    <li className="flex cursor-pointer flex-col items-center">
                        <span className="grid h-4 w-4 place-items-center">
                            <Mail color="#000" />
                        </span>
                        <span className="text-[10px] leading-4">Book Now</span>
                    </li>
                    <li
                        className="flex cursor-pointer flex-col items-center"
                        onClick={callback}
                    >
                        <span className="grid h-4 w-4 place-items-center">
                            <Hamburger />
                        </span>
                        <span className="text-[10px] leading-4">Menu</span>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Banner;
