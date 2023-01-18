import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./Carousel.module.css";
import { Item } from "./CarouselItem";

type args = { children: JSX.Element[] };
const itemMargin = 10;
export function Carousel({ children }: args) {
    /* ---------------------------- Items Controller ---------------------------- */
    // TODO: ¿Should this be an independent component?
    const [refs, items] = useMemo(() => {
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
            refs.map((ref) =>
                ref.current ? ref.current.offsetWidth + itemMargin * 2 : 0
            )
        );
    }, [refs]);
    console.table(itemsSpace);

    const getItemSpace = useCallback((index:number)=>{
        return itemsSpace[index];
    }, [itemsSpace])

    // calculate max space
    const maxSpace = useMemo(() => Math.max(...itemsSpace), [itemsSpace]);
    console.log(maxSpace);



    /* ---------------------------- Iterator Control ---------------------------- */
    // TODO: ¿Should this be an independent component?
    const [translateX, setTranslateX] = useState(0);
    const [index, setIndex] = useState(0);
    const [distanceToWall, setDistance] = useState(0)
    const [pathTraveled, setPathTraveled] = useState(0)
    const iteratorRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    // center Item
    const centerItem = useCallback((itemSpace: number, carouselWidth: number) => {
        debugger; 
        console.log("translating...")
        const whiteSpace = carouselWidth - itemSpace
        setTranslateX(translateX + whiteSpace / 2)
        return whiteSpace / 2
    }, [])

    function onClickLeft() {
        if (index <= 0) {
            debugger;
            return;
        }
        setIndex(index - 1);
        setTranslateX(translateX + getItemSpace(index));
        // if we go left, we substract pathTraveled
        setPathTraveled(pathTraveled - getItemSpace(index))
        console.log("onLeft");
    }

    function onClickRight() {
        debugger;
        if (index >= itemsSpace.length - 1 || distanceToWall <= 0) {
            return;
        }
        setIndex(index + 1);
        setTranslateX(translateX - getItemSpace(index));
        // if we go right, we add pathTraveled
        setPathTraveled(pathTraveled + getItemSpace(index))
    }

    useEffect(() => {
        const itemSpace = getItemSpace(index)
        if (!iteratorRef.current || !carouselRef.current || !itemSpace || itemSpace == 0) {
            return
        }
        const iteratorWidth = iteratorRef.current.offsetWidth
        const carouselWidth = carouselRef.current.offsetWidth
        
        console.log("INDEX:", index)
        console.log("INDEX SIZE:", getItemSpace(index))
        debugger;
        const centerTraveled = centerItem(itemSpace, carouselWidth)
        setPathTraveled(pathTraveled + centerTraveled)
        // distance to wall is calculated on each render ¿should i use a memo?
        setDistance(iteratorWidth - carouselWidth - pathTraveled )
        console.table({
            iteratorWidth,
            carouselWidth,
            centerTraveled,
            pathTraveled,
            distanceToWall
        });
        console.log(index)
    }, [centerItem, distanceToWall, getItemSpace, index, pathTraveled]);

    debugger;
    return (
        <div className={styles.wraper}>
            <button onClick={()=>onClickLeft()}>Left</button>
            <div className={styles.Carousel} style={{ minWidth: `${maxSpace}px` }} ref={carouselRef}>
                <div
                    className={styles.Iterator}
                    ref={iteratorRef}
                    style={{ transform: `translateX(${translateX}px)` }}
                >
                    {items}
                </div>
            </div>
            <button onClick={()=>onClickRight()}>Right</button>
        </div>
    );
}
