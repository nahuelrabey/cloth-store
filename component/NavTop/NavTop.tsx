/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import MenuController from "../MenuController";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import styles from "./NavTop.module.css"
const inter = Inter({ subsets: ['latin'] })

export function Mobile() {
    return (
        <div style={inter.style} className={styles.navTopMobile}>
            <MenuController/>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
        </div>
    )
}

export function Desktop() {
    return (
        <div style={inter.style} className={styles.navTopDesktop}>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
            <SearchBar />
            <ShoppingCart />
        </div>
    )
}