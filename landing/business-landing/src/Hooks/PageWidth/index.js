import {useEffect, useState} from "react";

const Index = () => {
    const [width, setSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth]);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
};

export default Index;