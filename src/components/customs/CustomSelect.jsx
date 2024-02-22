import classNames from 'classnames';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const CustomSelect = ({ placeholder, options = [], desc = '' }) => {
    const [selectedValue, setSelectedValue] = useState({
        label: '',
        value: '',
    });
    const [listOpened, setListOpened] = useState(false);
    const handleToggleList = () => {
        setListOpened((bool) => !bool);
    };
    const handleOptionSelect = (e) => {
        setSelectedValue({
            label: e.target.textContent,
            value: e.target.dataset.value,
        });
        setListOpened(false);
    };

    return (
        <div className="mb-10">
            <div
                className={classNames(
                    'relative select-none border-b-2 font-poppins outline-none',
                    {
                        'border-primary-70': selectedValue.value,
                        'border-gray-scale': !selectedValue.value,
                    },
                )}
            >
                <div
                    data-value=""
                    className="flex cursor-pointer items-center"
                    onClick={handleToggleList}
                >
                    <span
                        className={classNames('mr-auto', {
                            'text-primary-70': selectedValue.value,
                            'text-gray-scale': !selectedValue.value,
                        })}
                    >
                        {selectedValue.value
                            ? selectedValue.label
                            : placeholder}
                    </span>{' '}
                    {selectedValue.value && !listOpened ? (
                        <FaAngleUp className="text-primary-70" />
                    ) : (
                        <FaAngleDown />
                    )}
                </div>
                {listOpened && (
                    <ul className="absolute top-[calc(100%+2px)] w-full border bg-white shadow-xl">
                        {options.map((option, index) => (
                            <li className="cursor-pointer" key={index}>
                                <div
                                    data-value={option.value}
                                    className="flex items-center px-2 py-1 hover:bg-black/10"
                                    onClick={handleOptionSelect}
                                >
                                    {option.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {desc && (
                <p className="mt-2 font-poppins text-[14px] font-normal text-gray-scale">
                    {desc}
                </p>
            )}
        </div>
    );
};

export default CustomSelect;
