import React, { useEffect } from "react";
import Card, { ICard } from "../../component/Card";
import Carousel from "../../component/Carousel";
import styles from "./Carousel.module.css"
export default function CarouselDemos() {

    const props: ICard[] = [
        {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }
    ]

    const boxes = props.map((props, index) => {
        return <Card {...props} key={index}/>
    })

    return (<Carousel>{boxes}</Carousel>)
}