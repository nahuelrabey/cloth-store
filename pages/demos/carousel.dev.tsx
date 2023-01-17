import React, { useEffect } from "react";
import Carousel from "../../component/Carousel";
import styles from "./Carousel.module.css"
export default function CarouselDemos() {

    const boxes = [...Array(5).keys()].map((_, index) => {
        return <div key={index} className={styles.Box}/>;
    })

    return (<Carousel>{boxes}</Carousel>)
}