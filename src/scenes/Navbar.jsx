import AnchorLink from "react-anchor-link-smooth-scroll";
import UseMediaQurey from "../hooks/useMediaQurey";
import { useState } from "react";

const Link =({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase();
    return(
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
        hover:text-yello transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}
const Navbar = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const IsAboveSmallScreens = UseMediaQurey("(min-width: 768px)");
    return(
        <nav className="`z-40 w-full fixed top-0 py-0`">
            <div className="flex items-center justify-between mx-auto w-5/6">
               <h4 className="font-playfair text-3xl font-bold">JE</h4>

               {/*DESKTOP NAV*/}
               {IsAboveSmallScreens ? (
                   <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                    <Link 
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                   </div>
               ) : (<div></div>)}
            </div>
        </nav>
    )
}

export default Navbar;