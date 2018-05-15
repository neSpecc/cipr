const BREAKPOINTS = {
    mobile: 680
};

/**
 * Check if screen size is mobile
 */
export const isMobile = () => {
    return !window.matchMedia(`(min-width: ${BREAKPOINTS.mobile}px)`).matches;
};