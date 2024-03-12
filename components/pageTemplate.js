"user client";
import { useEffect, useState } from "react";
import SmoothScroll from "./smoothScroll";



export default function PageTemplate({children}) {
    const [width, setWidth] = useState();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        console.log(isMobile);

    }
    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [window.innerWidth]);

    const isMobile = width <= 768;

    if (isMobile)
        return children;
    return (
        <SmoothScroll>
            {children}
        </SmoothScroll>
    )
}