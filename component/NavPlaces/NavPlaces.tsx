/* eslint-disable @next/next/no-img-element */
import styles from "./NavPlaces.module.css"
import Link from "next/link"
import { Roboto_Slab } from "@next/font/google"
import SearchBar from "../SearchBar"
import Hamburguer, { MenuContext } from "../MenuController"
import { useContext } from "react"

const slab = Roboto_Slab({ subsets: ['latin'] })

export type Place = [string, string]
type args = { places: Place[] }


type argsItems = { places: Place[] }
function Items({ places }: argsItems) {
    const items = places.map(([text, place], index) =>
        <li key={index}><Link href={place}>{text}</Link></li>
    )
    return <ul style={slab.style} className={styles.items}>{items}</ul>
}


export function Desktop(props: args) {
    return <div className={styles.placesDesktop}><Items {...props} /></div>
}

export function Mobile(props: args) {
    const { isActive } = useContext(MenuContext)


    return isActive ? (
        <div className={styles.placesMobile}>
            <Hamburguer />
            <SearchBar />
            <Items {...props} />
        </div>
    ) : null
}