import type { ICard } from "../Card"
import Card from "../Card"
import styles from "./Grid.module.css"

type args = { cards: ICard[] }
export default function Grid({ cards }: args) {
    const cardElements = cards.map((card, index) => <Card {...card} key={index}/>)
    return (
        <div className={styles.grid}>
            {cardElements}
        </div>
    )
}