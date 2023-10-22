import { useState, useEffect } from "react";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { 
    breakpoint, 
    isXS: breakpoint === 'xs',
    isSM: breakpoint === 'sm',
    isMD: breakpoint === 'md',
    isLG: breakpoint === 'lg',
    isXL: breakpoint === 'xl',
  };
};

const getBreakpoint = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1200) {
    return "xl";
  } else if (screenWidth >= 992) {
    return "lg";
  } else if (screenWidth >= 768) {
    return "md";
  } else if (screenWidth >= 576) {
    return "sm";
  } else {
    return "xs";
  }
};

export default useBreakpoint;
