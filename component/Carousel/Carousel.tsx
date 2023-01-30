import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { Item } from "./CarouselItem";
import Image from "next/image"

type args = { children: JSX.Element[], className?: string };
const itemMargin = 10;
export function Carousel({ children, className="" }: args) {
    /* ---------------------------- Items Controller ---------------------------- */
    // TODO: ¿Should this be an independent component?
    const [itemsRefs, items] = useMemo(() => {
        let key = 0;
        const items = [];
        const refs = [];
        for (const child of children) {
            const ref = React.createRef<HTMLDivElement>();
            items.push(
                <Item key={key} margin={itemMargin} ref={ref}>
                    {child}
                </Item>
            );
            refs.push(ref);
            key++;
        }
        return [refs, items];
    }, [children]);

    // this could be a custom hook?
    const [itemsSpace, setItemsSpace] = useState([0]);
    useEffect(() => {
        debugger;
        setItemsSpace(
            itemsRefs.map((ref) =>
                ref.current ? ref.current.offsetWidth + itemMargin * 2 : 0
            )
        );
    }, [itemsRefs]);
    // console.debug(itemsSpace);

    const getItemSpace = useCallback((index: number) => {
        return itemsSpace[index];
    }, [itemsSpace])

    // calculate max space
    const maxSpace = useMemo(() => Math.max(...itemsSpace), [itemsSpace]);



    /* ---------------------------- Iterator Control ---------------------------- */
    // TODO: ¿Should this be an independent component?
    const [iteratorWidth, setIteratorWidth] = useState(0)
    const [carouselWidth, setCarousuelWidth] = useState(0)
    const [translateX, setTranslateX] = useState(0);
    const itemIndex = useRef(0)
    const [distanceToWall, setDistance] = useState(0)
    const [_, setPathTraveled] = useState(0)
    const iteratorRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    // center Item callback
    const centerItem = useCallback((itemSpace: number, carouselWidth: number) => {
        debugger;
        console.debug("translating...")
        const whiteSpace = carouselWidth - itemSpace
        console.debug("White space:", whiteSpace)
        setTranslateX((tX) => whiteSpace > 0 ? tX + whiteSpace / 2 : tX)
        return whiteSpace / 2
    }, [])

    function onClickLeft() {
        debugger;
        if (itemIndex.current <= 0) {
            return;
        }
        itemIndex.current -= 1
        const nextItemSpace = getItemSpace(itemIndex.current)
        setTranslateX(tx => tx + nextItemSpace);
        setPathTraveled(pt => pt - nextItemSpace) // if we go left, we substract pathTraveled
        console.debug("onLeft");
    }

    function onClickRight() {
        debugger;
        if (itemIndex.current >= itemsSpace.length - 1 || distanceToWall <= 0) {
            return;
        }
        itemIndex.current += 1
        const nextItemSpace = getItemSpace(itemIndex.current)
        setTranslateX(tx => tx - nextItemSpace);
        setPathTraveled(pt => pt + nextItemSpace) // if we go right, we add pathTraveled
        console.debug("onRight");
    }

    // run when iterator ref changes
    useEffect(() => {
        if (!iteratorRef.current || !carouselRef.current) return;
        setIteratorWidth(iteratorRef.current.offsetWidth)
        setCarousuelWidth(carouselRef.current.offsetWidth)
    }, [iteratorRef, carouselRef])

    // center first item
    useEffect(() => {
        const itemSpace = getItemSpace(itemIndex.current)
        if (!itemSpace || itemSpace == 0) {
            return
        }

        const centerTraveled = centerItem(itemSpace, carouselWidth)
        setPathTraveled((pathTraveled) => {
            const newPath = pathTraveled + centerTraveled
            setDistance(iteratorWidth - carouselWidth - pathTraveled)
            return newPath
        })
        // distance to wall is calculated on each render ¿should i use a memo?
    }, [carouselWidth, centerItem, getItemSpace, iteratorWidth]);

    // console.debug({
    //     itemIndex,
    //     carouselWidth,
    //     iteratorWidth,
    //     translateX
    // })

    return (
        <section className={`${styles.wraper} ${className}`}>
            <button onClick={() => onClickLeft()}>
                <Image src="/left-arrow.svg" alt="left arrow icon" style={{ objectFit: "contain" }} width={20} height={20} />
            </button>
            <div className={styles.Carousel} style={{ minWidth: `${maxSpace}px` }} ref={carouselRef}>
                <div
                    className={styles.Iterator}
                    ref={iteratorRef}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {items}
                </div>
            </div>
            <button onClick={() => onClickRight()}>
                <Image src="/right-arrow.svg" alt="left arrow icon" style={{ objectFit: "contain" }} width={20} height={20} />
            </button>
        </section>
    );
}
