
import { GetStaticProps } from "next";
import Head from "next/head";
import { ICard } from "../component/Card";
import Nav from "../component/Nav";
import type { Place } from "../component/NavPlaces/NavPlaces";
import ShowCase from "../component/Showcase";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
import Sections from "../component/Sections";
import Newsletter from "../component/Newsletter";
import Desktop from "../component/Desktop";
import Mobile from "../component/Mobile";

const inter = Inter({ subsets: ["latin"] });

type params = { data: ICard[]; places: Place[]; sections: Sections.ISection[] };
function HomeDesktop({ data, places, sections }: params) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main style={inter.style} className={styles.main}>
        <Nav.Desktop places={places} />
        <ShowCase.Desktop data={data} />
        <Sections.Desktop sections={sections}/>
        <Newsletter/>
      </main>
    </>
  );
}

function HomeMobile({ data, places, sections }: params) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main} style={inter.style}>
        <Nav.Mobile places={places} />
        <ShowCase.Mobile data={data} />
        <Sections.Mobile sections={sections} />
        <Newsletter />
      </main>
    </>
  );
}

export default function Home(params:params){
    return (
        <>
        <Mobile>
            <HomeMobile {...params}/>
        </Mobile>
        <Desktop>
            <HomeDesktop {...params}/>
        </Desktop>
        </>
    )
}

export const getStaticProps: GetStaticProps<params> = (context) => {
  return {
    props: {
      data: [
        {
          imageSrc: "/samples/camisa.jpg",
          price: 15000,
          quotas: 6,
          title: "Camisa Top",
        },
        {
          imageSrc: "/samples/camisa.jpg",
          price: 15000,
          quotas: 6,
          title: "Camisa Top",
        },
        {
          imageSrc: "/samples/camisa.jpg",
          price: 15000,
          quotas: 6,
          title: "Camisa Top",
        },
        {
          imageSrc: "/samples/camisa.jpg",
          price: 15000,
          quotas: 6,
          title: "Camisa Top",
        },
      ],
      places: [
        ["COLECCI??N SS'23", "#"],
        ["L??NEAS", "#"],
        ["REBAJAS", "#"],
        ["CONTACTO", "#"],
      ],
      sections: [
        {
          image: "/scarf.jpg",
          name: "scarf",
          url: "#",
        },
        {
          image: "/scarf.jpg",
          name: "scarf",
          url: "#",
        },
        {
          image: "/scarf.jpg",
          name: "scarf",
          url: "#",
        },
        {
          image: "/scarf.jpg",
          name: "scarf",
          url: "#",
        },
      ],
    }, // will be passed to the page component as props
  };
};