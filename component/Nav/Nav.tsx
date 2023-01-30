import * as NavTop from "../NavTop"
import NavPlaces from "../NavPlaces";
import { MenuContext } from "../MenuController"
import { useState } from "react";
import { Place } from "../NavPlaces/NavPlaces";


type params = {places: Place[]}
export function Desktop({places}:params) {
    const [isMobileMenuActive, setMobileMenuActive] = useState(false)
    const toggle = () => { setMobileMenuActive(!isMobileMenuActive) } // if true, set false, if false, set true
    return (
        <nav>
            <MenuContext.Provider value={{ isActive: isMobileMenuActive, toggle}}>
                <NavTop.Desktop />
                <NavPlaces.Desktop places={places}/>
            </MenuContext.Provider>
        </nav>
    )
}

export function Mobile({places}:params){
    const [isMobileMenuActive, setMobileMenuActive] = useState(false)
    const toggle = () => { setMobileMenuActive(!isMobileMenuActive) } // if true, set false, if false, set true
    return (
        <nav>
            <MenuContext.Provider value={{ isActive: isMobileMenuActive, toggle}}>
                <NavTop.Mobile />
                <NavPlaces.Mobile places={places}/>
            </MenuContext.Provider>
        </nav>
    )
}