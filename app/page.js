import {offers, contact} from "@/data/oferta";
import {List, ItemOffer, ItemContact} from "@/components/Oferta";

export default function Home(){
  return (
    <main id="hero">
      <section className="py-2 px-5 mt-10 text-center flex flex-col items-center">
        <h2 className="text-[#e24b4a] uppercase font-bold">Sklep motoryzacyjny</h2>
        <h3 className="font-bold text-[40px] leading-10 py-2">Tu&nbsp;znajdziessz wszystko dla twojego auta</h3>
        <p className="text-[#b8b8b5] text-[20px] mt-5 max-w-[300px] font-normal">Klucze, zestawy narzędziowe i akcesoria od sprawdzonych&nbsp;marek</p>
      </section>
      <div className="flex flex-col px-5 mb-10">
        <a 
          href="#offer"
          className=" bg-[#e24b4a] p-3 rounded-lg mt-5 md:w-60 text-center mt-6"
        >
          Zobacz ofertę
        </a>
        {/* <input 
          type="button" 
          value="Zobacz ofertę" 
          className="bg-#171717"
        /> */}
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Zbigniewa Oleśnickiego 3, 42-470 Siewierz, Polska"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-lg
            p-3
            border-2
            border-[#2a2a2a]
            my-3
            mt-4
            md:w-60 text-center
          "
        >
          Jak dojechać
        </a>
      </div>
      <section id="offer" 
      className="
        px-5
        mb-10
      ">
        <h3 className="text-[#e24b4a] text-[25px] uppercase font-bold">Oferta:</h3>
          <List list={offers} ItemComponent={ItemOffer} className="flex flex-col items-center md:flex"/>
      </section>
      <section id="contact" 
      className="
        py-2 
        px-5
        mb-10
      ">
        {/* [#808078] */}
        <h3 className="text-[#e24b4a] mb-3 text-[25px] uppercase font-bold ">Kontakt:</h3>
        <List list={contact} ItemComponent={ItemContact} />
      </section>
    </main>
  )
}