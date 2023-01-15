import styles from "./Card.module.css"
import Image from "next/image"
import { Roboto } from "@next/font/google"

const font = Roboto({ subsets: ["latin"], weight: ["300", "700"] })

export type ICard = { title: string, imageSrc: string, price: number, quotas: number }
export function Card({ title, imageSrc, price, quotas }: ICard) {

    return (
        <div className={styles.card}>
            <div className={styles.imageWrap}>
                {/* <Image src={imageSrc} alt={`imagen de ${title}`} width={imageWidth} height={imageHeigth} /> */}
                <Image src={imageSrc} alt={`imagen de ${title}`} fill style={{ objectFit: "cover" }} />
            </div>
            <div style={font.style} className={styles.textWrap}>
                <h2>{title}</h2>
                <h3>${price.toLocaleString('es')}</h3>
                <h4>hasta {quotas} sin interes</h4>
            </div>
        </div>
    )
}