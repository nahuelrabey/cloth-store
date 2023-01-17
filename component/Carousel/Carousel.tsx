import React, { useEffect, useMemo, useRef, useState } from "react"
import styles from "./Carousel.module.css"
import { Item } from "./CarouselItem"

type args = { children: JSX.Element[] }
const itemMargin = 10;
export function Carousel({ children }: args) {
    const [refs, items] = useMemo(() => {
        let key = 0
        const items = []
        const refs = []
        for (const child of children) {
            const ref = React.createRef<HTMLDivElement>()
            items.push(<Item key={key} margin={itemMargin} ref={ref}>{child}</Item>)
            refs.push(ref)
            key++;
        }
        return [refs, items]
    }, [children])


    // this could be a custom hook?
    const [itemsSpace, setItemsSpace] = useState([0])
    useEffect(() => {
        setItemsSpace(refs.map((ref) => ref.current ? ref.current.offsetWidth + itemMargin * 2 : 0))
        // setMaxSpace
    }, [refs])
    console.table(itemsSpace)

    function getItemSpace(index: number){
        return itemsSpace[index];
    }

    const maxSpace = useMemo(() => Math.max(...itemsSpace), [itemsSpace])
    console.log(maxSpace)

    const iteratorRef = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState(0)
    const [index, setIndex] = useState(0)
    function onClickLeft() {
        if (index <= 0) {
            return
        }
        setIndex(index - 1)
        setTranslateX(translateX + getItemSpace(index))
        console.log("onLeft")
    }
    function onClickRight() {
        if (index >= itemsSpace.length - 1) {
            return
        }
        setIndex(index + 1)
        setTranslateX(translateX - getItemSpace(index))
    }

    console.log(index)

    return (
        <div className={styles.Carousel} style={{ width: `${maxSpace}px` }}>
            <div className={styles.Iterator} ref={iteratorRef} style={{ transform: `translateX(${translateX}px)` }}>
                {items}
            </div>
            <button onClick={onClickLeft}>Left</button>
            <button onClick={onClickRight}>Right</button>
        </div>
    )
}