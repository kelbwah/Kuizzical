import React from 'react';
import PropTypes from 'prop-types';

const BodyComponent = (props) => {
    return ( 
        <main className={`${props.isFullyCenter ? 'm-auto' : 'mx-auto'} relative flex flex-col flex-none items-center min-h-full gap-4 select-none lg:w-[1024px] w-full lg:px-12 md:px-12 px-8 pt-16 pb-52 fade-in-fast`}>
            {props.innerDivComponents}
        </main>
    );
};

BodyComponent.defaultProps = {
    innerDivComponents: null,
    isFullyCenter: true, 
};

BodyComponent.propTypes = {
    innerDivComponents: PropTypes.any,  
    isFullyCenter: PropTypes.bool,
};

export default BodyComponent;
