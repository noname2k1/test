import React, { useState } from 'react';
import Banner from './Banner';
import FixedBar from './FixedBar';
import Introduce from './Introduce';
import CheersFamily from './CheersFamily';
import FAQ from './FAQ';
import Contact from './Contact';
import MobileMenu from './MobileMenu';
import './home.scss';
const Home = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleToggleMobileMenu = () => {
        setMobileMenu((prev) => !prev);
    };
    return (
        <div className="overflow-hidden">
            {!mobileMenu && (
                <>
                    <Banner callback={handleToggleMobileMenu} />
                    <Introduce />
                    <CheersFamily />
                    <FAQ />
                    <Contact />
                    <FixedBar />
                </>
            )}
            {mobileMenu && <MobileMenu callback={handleToggleMobileMenu} />}
        </div>
    );
};

export default Home;
