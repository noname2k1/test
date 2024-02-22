import React from 'react';
import classNames from 'classnames';

const CustomButton = ({
    bgClass = 'bg-primary-70',
    rounded = false,
    classes = '',
    children
}) => {
    const className = classNames('flex items-center justify-center', {
        [bgClass]: bgClass,
        'rounded-full': rounded,
        [classes]: classes
    });
    return <button className={className}>{children}</button>;
};

export default CustomButton;
