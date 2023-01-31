/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import MenuController from "../MenuController";
import SearchBar from "../SearchBar";
import ShoppingCart from "../ShoppingCart";
import styles from "./NavTop.module.css"

export function Mobile() {
    return (
        <div className={styles.navTopMobile}>
            <MenuController/>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
        </div>
    )
}

export function Desktop() {
    return (
        <div className={styles.navTopDesktop}>
            <div className={styles.logo}>
                <span>TU LOGO</span>
            </div>
            <SearchBar />
            <ShoppingCart />
        </div>
    )
}