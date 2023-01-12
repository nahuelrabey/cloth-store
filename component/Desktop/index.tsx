import { useEffect, useState } from "react";

type args = { children: JSX.Element }
export default function Desktop ({ children }: args) {
    const [isDesktop, setDesktop] = useState(false)
    useEffect(() => {
        setDesktop(window.innerWidth >= 600)
    }, [])

    return isDesktop ? children : null 
}