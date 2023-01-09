/* eslint-disable @next/next/no-img-element */
import styles from "./SearchBar.module.css"

export function SearchBar(){
    return (
        <div className={styles.searchBar}>
            <input type="text" name="searc" id="searc" />
            <img src="/search-lens.svg" alt="search lens" />
        </div>
    )
}