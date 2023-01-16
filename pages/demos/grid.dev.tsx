import Card, { ICard } from "../../component/Card";
import Grid from "../../component/CardGrid";

export default function GridPage() {
    const props: ICard[] = [
        {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }, {
            imageSrc: "/samples/camisa.jpg",
            price: 15000,
            quotas: 6,
            title: "Camisa Top"
        }
    ]
    return <Grid cards={props}/>
}