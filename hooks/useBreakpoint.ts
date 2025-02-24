import { useState, useEffect } from 'react';

const breakpoints = {
    desktop: 1440,
    tablet: 768,
    mobile: 500,
    smallMobile: 360,
};

const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

    function getCurrentBreakpoint() {
        const width = window.innerWidth;
        if (width >= breakpoints.desktop) return breakpoints.desktop;
        if (width >= breakpoints.tablet) return breakpoints.tablet;
        if (width >= breakpoints.mobile) return breakpoints.mobile;
        if (width < breakpoints.mobile) return breakpoints.smallMobile;
        return breakpoints.mobile;
    }

    useEffect(() => {
        const handleResize = () => {
            const newBreakpoint = getCurrentBreakpoint();
            if (newBreakpoint !== breakpoint) {
                setBreakpoint(newBreakpoint);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return breakpoint;
};

export default useBreakpoint;
