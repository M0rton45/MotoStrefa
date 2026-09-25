import {offers, contact} from "@/data/oferta";
import {List, ItemOffer, ItemContact} from "@/components/Oferta";

export default function Home(){
  return (
    <main id="hero">
      <section className="py-2 px-5">
        <h2 className="text-[#e24b4a] ">Sklep motoryzacyjny</h2>
        <h3 className="font-bold text-2xl py-2">Gdzie znajdziessz wszystko dla twojego auta</h3>
        <p className="text-[#b8b8b5] text-xs">Klucze, zestawy narzędziowe i akcesoria od sprawdzonych marek</p>
      </section>
      <div className="flex flex-col px-5">
        <a 
          href="#offer"
          className=" bg-[#e24b4a] p-3 rounded-lg mt-5"
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
          "
        >
          Jak dojechać
        </a>
      </div>
      <section id="offer" 
      className="
        px-5
      ">
        <h3 className="text-[#808078]">Oferta:</h3>
        <List list={offers} ItemComponent={ItemOffer}/>
      </section>
      <section id="contact" 
      className="
        py-2 
        px-5
      ">
        <h3 className="text-[#808078] mb-3">Kontakt:</h3>
        <List list={contact} ItemComponent={ItemContact}/>
      </section>
    </main>
  )
}