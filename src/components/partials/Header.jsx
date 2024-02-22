import React, { useState, memo } from 'react';
import { Facebook, Logo, Youtube } from '../../assets/images';
import { FaAngleDown } from 'react-icons/fa';
import CustomButton from '../../components/customs/CustomButton';
import classNames from 'classnames';
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
const Header = ({ fixed = false }) => {
    return (
        <header
            className={classNames(
                'fixed left-24 right-24 z-50 flex h-[96px] items-center justify-between rounded-2xl bg-white px-[30px] opacity-0 duration-1000 max-xl:hidden',
                {
                    'top-10 opacity-100 ease-linear': fixed,
                    '-top-full': !fixed,
                },
            )}
        >
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
    );
};

export default memo(Header);
