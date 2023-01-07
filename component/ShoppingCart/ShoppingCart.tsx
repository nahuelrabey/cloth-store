/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import React from "react"
import style from "./ShoppingCart.module.css"

type args = { count?: number }

export function ShoppingCart({ count = 0 }: args) {
    const isActive = count > 0

    // NOTICE THAT ALL THIS LOGIC COULD BE IN A "CIRCLE" ELEMENT
    const textRef = React.createRef<HTMLSpanElement>()
    const imRef = React.createRef<HTMLImageElement>()
    const divRef = React.createRef<HTMLDivElement>()
    const circleClassName = `${isActive ? style.active : ""} ${style.circle}`
    useEffect(() => {
        if (!textRef.current || !imRef.current || !divRef.current) {
            return
        }

        const radius = Math.max(imRef.current.offsetWidth * 0.65, 25);
        const textWidth = textRef.current.offsetWidth

        // padding to be set to the div containig span
        const sidePadding = (radius - textWidth) / 2;
        divRef.current.style.paddingLeft = `${sidePadding}px`;
        divRef.current.style.paddingRight = `${sidePadding}px`;
        divRef.current.style.height = `${radius}px`;

    })
    return (
        <div className={style.cart}>
            <img src="/shopping-cart.svg" alt="shopping cart" ref={imRef} />
            <div>
                <div className={circleClassName} ref={divRef}>
                    <span ref={textRef}>{count}</span>
                </div>
            </div>
        </div>
    )
}