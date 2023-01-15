import Card, { ICard } from "../../component/Card";

export default function Grid() {
    const props: ICard = {
        imageSrc: "/samples/camisa.jpg",
        price: 15000,
        quotas: 6,
        title: "Camisa Top"
    }
    return <Card {...props} />
}