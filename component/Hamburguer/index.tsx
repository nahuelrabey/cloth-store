import { useEffect, useState } from "react"

export default function Hamburguer() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth * 0.15)
        console.log("Width:",width)
    }, [width])

    // eslint-disable-next-line @next/next/no-img-element
    return (<div><img src="/menu.svg" alt="ícono del menú" width={width} /></div>)
}