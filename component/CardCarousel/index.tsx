import { Card, ICard } from "../Card/Card";
import Carousel from "../Carousel";

type params = { data: ICard[], className?:string };
export default function CardCarousel({ data, className }: params) {
  const cards = data.map((props, index) => <Card {...props} key={index} />);
  return <Carousel className={className}>{cards}</Carousel>
}
