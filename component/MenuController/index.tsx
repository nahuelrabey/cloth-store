import { createContext, useContext, useEffect, useState } from "react"

// this should be in another file? it's just an interface
const ContextShape = { isActive: false, toggle: () => { } }
export const MenuContext = createContext(ContextShape)

export default function Hamburguer() {
    const { toggle } = useContext(MenuContext)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth * 0.08)
        // console.log("Width:", width)
    }, [width])

    // eslint-disable-next-line @next/next/no-img-element
    return (<div><img src="/menu.svg" alt="ícono del menú" width={width} onClick={() => toggle()} /></div>)
}