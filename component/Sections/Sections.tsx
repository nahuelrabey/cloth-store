export type ISection = { url: string; image: string; name: string };

import style from "./Sections.module.css";

function validateSection(sections: ISection[]) {
  if (sections.length != 4)
    throw TypeError("To render, the component need at least 4 sections");
}

type params = { sections: ISection[] };
export function Desktop({ sections }: params) {
  validateSection(sections);
  const boxes = sections.map(({ image, name, url }, index) => (
    <div
      key={index}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      className={style[`box-${index + 1}`]}
    >
      <a href={url} className={style.link}>
        <span>{name.toUpperCase()}</span>
      </a>
    </div>
  ));

  return (
    <section className={style.desktop}>
      {boxes[0]}
      <div className={style.wrap_1}>
        {boxes[1]}
        <div className={style.wrap_2}>
          {boxes[2]}
          {boxes[3]}
        </div>
      </div>
    </section>
  );
}
