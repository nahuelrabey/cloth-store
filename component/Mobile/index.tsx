import { useEffect, useState } from "react";

type args = { children: JSX.Element }
export default function Mobile ({ children }: args) {
    const [isMobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(window.innerWidth <= 600)
    }, [])

    return isMobile ? children : null
}