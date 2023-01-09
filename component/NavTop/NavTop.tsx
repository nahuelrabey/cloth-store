import { Inter } from "@next/font/google";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import styles from "./NavTop.module.css"
const inter = Inter({ subsets: ['latin'] })

export function NavTop() {
    return (
        <div  style={inter.style} className={styles.navTop}>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
            <SearchBar />
            <ShoppingCart />
        </div>
    )
}