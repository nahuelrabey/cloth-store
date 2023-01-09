import styles from "./NavPlaces.module.css"
import Link from "next/link"
import { Roboto_Slab } from "@next/font/google"

const slab = Roboto_Slab({ subsets: ['latin'] })

export function NavPlaces() {
    const places = [["COLECCIÓN SS'23", "#"], ["LÍNEAS", "#"], ["REBAJAS", "#"], ["CONTACTO", "#"]]
    const items = places.map(([text, place], index) =>
        <li key={index}><Link href={place}>{text}</Link></li>
    )
    return (
        <div style={slab.style} className={styles.places}>
            <ul>
                {items}
            </ul>
        </div>
    )
}