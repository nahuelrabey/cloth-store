import NavPlaces from "../NavPlaces";
import NavTop from "../NavTop";
import { MenuContext } from "../MenuController"
import { useState } from "react";


export function Nav() {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false)
    const toggle = () => { setMobileMenuActive(!isMobileMenuActive) } // if true, set false, if false, set true
    return (
        <nav>
            <MenuContext.Provider value={{ isActive: isMobileMenuActive, toggle}}>
                <NavTop />
                <NavPlaces />
            </MenuContext.Provider>
        </nav>
    )
}