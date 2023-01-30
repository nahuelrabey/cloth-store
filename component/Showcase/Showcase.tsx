import CardGrid from "../CardGrid";
import { ICard } from "../Card";
import CardCarousel from "../CardCarousel";

type params = { data: ICard[], className?: string };
export function Mobile({ data, className }: params) {
  return (
    <>
      <CardCarousel data={data} className={className}/>
    </>
  );
}

export function Desktop({ data, className }: params) {
  return (
    <>
      <CardGrid cards={data} className={className}/>
    </>
  );
}
