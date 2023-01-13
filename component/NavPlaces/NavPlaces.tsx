/* eslint-disable @next/next/no-img-element */
import styles from "./NavPlaces.module.css"
import Link from "next/link"
import { Roboto_Slab } from "@next/font/google"
import SearchBar from "../SearchBar"
import Mobile from "../Mobile"
import Desktop from "../Desktop"
import Hamburguer, { MenuContext } from "../MenuController"
import { useContext } from "react"

const slab = Roboto_Slab({ subsets: ['latin'] })

type place = [string, string]
type args = { places: place[] }

export function NavPlaces() {
    const places: place[] = [["COLECCIÓN SS'23", "#"], ["LÍNEAS", "#"], ["REBAJAS", "#"], ["CONTACTO", "#"]]
    return (<>
        <Mobile><NavPlacesMobile places={places} /></Mobile>
        <Desktop><NavPlacesDesktop places={places} /></Desktop>
    </>)
}

type argsItems = { places: place[] }
function Items({ places }: argsItems) {
    const items = places.map(([text, place], index) =>
        <li key={index}><Link href={place}>{text}</Link></li>
    )
    return <ul style={slab.style} className={styles.items}>{items}</ul>
}


function NavPlacesDesktop(props: args) {
    return <div className={styles.placesDesktop}><Items {...props} /></div>
}

function NavPlacesMobile(props: args) {
    const { isActive } = useContext(MenuContext)


    return isActive ? (
        <div className={styles.placesMobile}>
            <Hamburguer />
            <SearchBar />
            <Items {...props} />
        </div>
    ) : null
}