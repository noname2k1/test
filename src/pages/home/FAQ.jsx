import React, { useState } from 'react';
import bookNowBtn from '../../assets/images/book-now-btn.png';
import CustomSelect from '../../components/customs/CustomSelect';
import classnames from 'classnames';
const FAQ = () => {
    const NAV_ITEMS = [
        { id: 0, label: 'Nature' },
        { id: 1, label: 'Journey' },
    ];
    const [tabIndex, setTabIndex] = useState(0);
    const handleSetTabIndex = (index) => {
        setTabIndex(index);
    };
    return (
        <section className="flex px-4 max-xl:flex-col xl:p-[100px]">
            <div className="xl:mr-auto">
                <div className="flex-1">
                    <div className="z-10 mb-5 flex flex-col items-start text-primary-70 xl:mb-[30px]">
                        <span className="text-3 xl:text-4 uppercase">
                            FAQ about
                        </span>
                        <h1 className="text-2xl uppercase leading-7 xl:text-[48px] xl:leading-[48px]">
                            The trip
                        </h1>
                    </div>
                </div>
                <button className="hidden xl:block">
                    <img src={bookNowBtn} alt="" />
                </button>
            </div>
            <div className="flex flex-col">
                {/* nav */}
                <nav className="mb-3 flex items-center gap-[50px] max-xl:w-full">
                    {NAV_ITEMS.map((item) => (
                        <h5
                            key={item.id}
                            onClick={() => handleSetTabIndex(item.id)}
                            className={classnames(
                                'flex-1 font-poppins text-[26px] font-bold uppercase max-xl:cursor-pointer max-xl:text-center',
                                {
                                    'max-xl: max-xl:border-b-2 max-xl:border-primary-70 max-xl:text-primary-70':
                                        item.id == tabIndex,
                                    'max-xl:text-gray-scale-1':
                                        item.id != tabIndex,
                                },
                            )}
                        >
                            {item.label}
                        </h5>
                    ))}
                </nav>
                {/* form */}
                <div className="flex items-center justify-center gap-[50px] xl:ml-auto">
                    <div
                        className={classnames('xl:w-[450px]', {
                            'max-xl:hidden': tabIndex != 0,
                        })}
                    >
                        <div>
                            <p className="mb-6 font-poppins text-[14px] font-normal text-gray-scale">
                                Browse our full service agency services and
                                prices or contact us for custom quotes.
                            </p>
                            <CustomSelect
                                placeholder={'What is inclued or excluded?'}
                                options={[
                                    { label: 'hello', value: 0 },
                                    { label: '1', value: 1 },
                                ]}
                                desc="Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded mytations and was all hassle
                free. Our guide was absolutely amazing too. Have re-booked."
                            />
                            <CustomSelect
                                placeholder={
                                    'How do I book and corfirm my trip?'
                                }
                            />
                            <CustomSelect
                                placeholder={'What should I bring?'}
                            />
                            <CustomSelect placeholder={'Travel insurance'} />
                        </div>
                    </div>
                    <div
                        className={classnames('xl:w-[450px]', {
                            'max-xl:hidden': tabIndex != 1,
                        })}
                    >
                        <div>
                            <p className="mb-6 font-poppins text-[14px] font-normal text-gray-scale">
                                Find inspiration and discover amazing knowledge
                                for successful site building.
                            </p>
                            <CustomSelect
                                placeholder={'What is inclued or excluded?'}
                                options={[
                                    { label: 'hello', value: 0 },
                                    { label: '1', value: 1 },
                                ]}
                                desc="Blown away by our Tanzania safari, I never expected it to be
                that good — it totally exceeded mytations and was all hassle
                free. Our guide was absolutely amazing too. Have re-booked."
                            />
                            <CustomSelect
                                placeholder={
                                    'How do I book and corfirm my trip?'
                                }
                            />
                            <CustomSelect
                                placeholder={'What should I bring?'}
                            />
                            <CustomSelect placeholder={'Travel insurance'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
