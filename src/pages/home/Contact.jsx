import React from 'react';
import {
    BigLogo,
    Call,
    CurvedText,
    Earth,
    F_Location,
    F_Logo,
    House,
    Mail,
    Transport,
} from '../../assets/images';
import bg4 from '../../assets/images/bg-4.png';
import classnames from 'classnames';
const Contact = () => {
    const FOOTER_ITEMS = [
        {
            title: 'Contact us',
            list: [
                {
                    icon: <Call />,
                    childrens: [
                        '+84 98 3333 986 (Miss. Linette)',
                        '+84 989 655 995 (Mr. Chinh)',
                    ],
                },
                {
                    icon: <Mail />,
                    children: '@cheershoster1@gmail.com',
                },
                {
                    icon: <Earth />,
                    children: '5 Au Trieu, Hoan Kien, Ha Noi',
                },
                {
                    icon: <House />,
                    children: 'Vietnam Cheers Hostel Official Site',
                },
            ],
        },
        {
            title: 'All tour',
            list: [
                {
                    icon: <Transport />,
                    children: 'Ha Giang Tour (3D3N)',
                },
                {
                    icon: <Transport />,
                    children: 'Ha Giang Tour (4D4N)',
                },
            ],
        },
        {
            title: 'Cheers tours',
            list: [
                {
                    icon: <F_Location />,
                    children: 'Ha Long Bay',
                },
                {
                    icon: <F_Location />,
                    children: 'Sapa Trekking Tour',
                },
                {
                    icon: <F_Location />,
                    children: 'Pu Luong Cheers Tour',
                },
            ],
        },
    ];
    return (
        <section className="bg-cover bg-center bg-no-repeat xl:h-[700px] xl:bg-[url(./assets/images/bg-4.png)] xl:p-[100px]">
            <div className="flex items-center justify-center max-xl:flex-col">
                <div className="relative h-auto max-xl:mb-[30px] max-xl:mt-10 xl:mr-auto">
                    <span className="max-xl:hidden">
                        <BigLogo />
                    </span>
                    <span className="xl:hidden">
                        <F_Logo />
                    </span>
                    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 xl:block">
                        <CurvedText />
                    </div>
                </div>
                <div className="flex items-start gap-[30px] max-xl:flex-col xl:gap-[120px]">
                    {FOOTER_ITEMS.map((fitem) => (
                        <div
                            className="flex w-full flex-col max-xl:justify-center"
                            key={fitem.title}
                        >
                            <h2 className="mb-[16px] whitespace-nowrap font-poppins text-[14px] font-bold uppercase max-xl:text-center">
                                {fitem.title}
                            </h2>
                            <ul className="flex flex-col gap-3 max-xl:items-center">
                                {fitem.list.map((item, index) => (
                                    <li
                                        className={classnames('flex', {
                                            'items-center': !item.childrens,
                                        })}
                                        key={index}
                                    >
                                        {item.icon}{' '}
                                        {item.childrens && (
                                            <div className="ml-1 flex flex-col font-poppins text-[14px] text-gray-scale">
                                                {item.childrens.map((info) => (
                                                    <span key={info}>
                                                        {info}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {item.children && (
                                            <span className="ml-1 font-poppins text-[14px] text-gray-scale">
                                                {item.children}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <img src={bg4} alt="background-4" className="xl:hidden" />
        </section>
    );
};

export default Contact;
