import type { ICard } from "../Card"
import Card from "../Card"
import styles from "./Grid.module.css"

type args = { cards: ICard[], className?: string }
export default function Grid({ cards, className="" }: args) {
    const cardElements = cards.map((card, index) => <Card {...card} key={index}/>)
    return (
        <section className={`${styles.grid} ${className}`}>
            {cardElements}
        </section>
    )
}