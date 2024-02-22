import React, { useState } from 'react';
import CloseImage from '../../assets/images/close-btn.png';
const MobileMenu = ({ callback = () => {} }) => {
    return (
        <div className="sticky top-0 z-20 h-screen w-full bg-white xl:hidden">
            <div className="absolute inset-0 bg-[url(./assets/images/mobile_bg.png)] bg-cover bg-no-repeat"></div>
            <div className="absolute inset-0 bg-[url(./assets/images/mobile_bg1.png)] bg-contain bg-bottom bg-no-repeat"></div>
            <ul className="relative flex w-full flex-col items-center gap-6 pt-[34px]">
                <li onClick={callback} className="text-xl leading-5">
                    <a href="/">HOME</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">ABOUT US</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">TOUR 3d3n</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">TOUR 4d4n</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">DESTINATIONS</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">BLOG</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">FAQ</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">CONTACT</a>
                </li>
                <li onClick={callback} className="text-xl leading-5">
                    <a href="#">VIETNAM CHEERS HOSTEL</a>
                </li>
            </ul>
            <button onClick={callback} className="absolute right-4 top-6">
                <img src={CloseImage} alt="close-image" />
            </button>
        </div>
    );
};

export default MobileMenu;
