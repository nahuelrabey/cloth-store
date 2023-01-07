/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react"
import Image from "next/image"
import style from "./ShoppingCart.module.css"

type args = { count?: number }

export function ShoppingCart({ count = 0 }: args) {
    const [svgSize, setSize] = useState(0)
    const [sizePadding, setPadding] = useState(0)
    const [textSize, setTextSize] = useState(0)

    const isActive = count > 0
    // const counterRef = React.createRef<HTMLDivElement>()
    const textRef = React.createRef<HTMLSpanElement>()
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const size = Math.max( window.innerWidth / 40, 30)
        setSize(size)
        setTextSize(textRef.current?.offsetWidth || 0)
        setPadding((size - textSize)/2)

        console.table({svgSize, sizePadding, textSize})
    }, [sizePadding, svgSize, textRef, textSize])
    return (
        <div className={style.cart}>
            <Image src="/shopping-cart.svg" alt="shopping cart" width={svgSize} height={svgSize} />
            <div className={isActive ? "active" : ""} style={{ paddingLeft: sizePadding, paddingRight: sizePadding }}>
                <span ref={textRef}>{count}</span>
            </div>
        </div>
    )
}

// export function ShoppingCart({count = 0}: args){
//     const isActive = count > 0
//     return (
//         <div className={style.cart}>
//             <img src="/shopping-cart.svg" alt="shopping cart"/>
//             <div className={isActive ? "active" : ""}>
//                 <span>{count}</span>
//             </div>
//         </div>
//     )
// }