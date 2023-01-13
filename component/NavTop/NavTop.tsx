/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Desktop from "../Desktop";
import Hamburguer from "../Hamburguer";
import Mobile from "../Mobile";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import styles from "./NavTop.module.css"
const inter = Inter({ subsets: ['latin'] })

export function NavTop() {
    return <>
        <Mobile><NavTopMobile /></Mobile>
        <Desktop><NavTopDesktop /></Desktop>
    </>
}

function NavTopMobile() {
    return (
        <div style={inter.style} className={styles.navTopMobile}>
            <Hamburguer/>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
        </div>
    )
}

function NavTopDesktop() {
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