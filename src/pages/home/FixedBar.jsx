import React, { useEffect, useState } from 'react';
import { GoToTop } from '../../assets/images';
import BookNowImage from '../../assets/images/book_now.png';
import Call from '../../assets/images/call.png';
import mobileGototopImage from '../../assets/images/mobile_gototop.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const FixedBar = () => {
    const [percentage, setPercentage] = useState(0);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        const calcPecentageOfScrollHeight = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            setPercentage(scrollProgress);
        };
        window.addEventListener('scroll', calcPecentageOfScrollHeight);
        return () =>
            window.removeEventListener('scroll', calcPecentageOfScrollHeight);
    }, []);

    return (
        <div className="fixed bottom-7 right-5 z-10 flex flex-col items-center justify-center gap-4">
            <button
                onClick={handleScrollToTop}
                className="relative hidden h-[50px] w-[50px] place-items-center xl:grid"
            >
                <div className="max-xl:hidden">
                    <CircularProgressbar
                        value={percentage}
                        strokeWidth={3}
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Text size
                            textSize: '16px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                            // Colors
                            pathColor: `#ea6227`,
                            trailColor: 'transparent',
                        })}
                    ></CircularProgressbar>
                </div>
                <div className="absolute">
                    <GoToTop />
                </div>
            </button>
            {/* mobile gototop */}
            <button
                onClick={handleScrollToTop}
                className="absolute bottom-12 right-0 grid h-10 w-6 place-items-center xl:hidden"
            >
                <img src={mobileGototopImage} alt="mobile-gototop-button" />
            </button>

            <button className="mt-6 hidden h-[50px] w-[50px] animate-bounce items-center justify-center object-cover xl:flex">
                <img src={BookNowImage} alt="" className="h-full w-full" />
            </button>
            <button className="relative hidden h-[50px] w-[50px] items-center justify-center object-cover xl:flex">
                <img src={Call} alt="" className="ml-1 h-full w-full" />
                <div className="absolute mr-1 mt-1 h-[60%] w-[60%] animate-ping rounded-full border-[4px]"></div>
                <div className="absolute mr-1 mt-1 h-2/3 w-2/3 animate-ping rounded-full border-[4px]"></div>
            </button>
        </div>
    );
};

export default FixedBar;
