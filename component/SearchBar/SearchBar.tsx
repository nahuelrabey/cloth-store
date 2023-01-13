/* eslint-disable @next/next/no-img-element */
import React from "react"
import styles from "./SearchBar.module.css"

export function SearchBar() {
    const inputRef = React.createRef<HTMLInputElement>()
    const handleFocus = () => {
        if (!inputRef.current) {
            return
        }
        inputRef.current.select();
    }
    return (
        <div className={styles.searchBar}>
            <input type="text" name="searc" id="searc" defaultValue="buscá marcas y productos" ref={inputRef} onFocus={() => handleFocus()} />
            <img src="/search-lens.svg" alt="search lens" />
        </div>
    )
}