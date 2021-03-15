import  {useEffect, useState} from 'react';

const Scroll = () => {
    const [scrollY, setScroll] = useState([window.scrollY]);

    useEffect(() => {
        const handleScroll = () => setScroll([window.scrollY]);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
};

export default Scroll;