import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Nav = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };
    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    };
    return (
        <header className=" py-8 top-0 right-0 left-0 absolute z-50 w-full">
            <nav className="flex px-16 lg:px-7.5 xl:px-16 max-lg:py-4 items-center max-container max-lg:justify-between">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <div className={`${openNavigation ? "flex" : "hidden"} fixed top-0 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto max-lg:bg-white`}>
                    <ul className="relative z-2 flex flex-col justify-center items-center m-auto lg:flex-row gap-16">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray" onClick={handleClick}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="lg:hidden z-10" onClick={toggleNavigation}>
                    <img src={hamburger} alt="Hamburger" width={25} height={25} />
                </button>
            </nav>
        </header>
    )
}

export default Nav