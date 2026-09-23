import {Wrench, Car, BroomSparkles} from "lucide-react";
import {Map, Clock5, Phone} from "lucide-react";

export const offers = [
    {
        id: 0,
        icon: <Wrench />,
        title: "Narzędzia ręczne",
        description: "Klucze, grzechotki i zestawy narzędziowe",
    },
    {
        id: 1,
        icon: <Car />,
        title: "Części samochodowe",
        description: "Filtry, oleje i wiele wiecęj",
    },
    {
        id: 2,
        icon: <BroomSparkles />,
        title: "Akcesoria samochodowe",
        description: "Detailing, uchwyty, kable rozruchowe",
    }   
]
export const contact = [
    {
        id: 0,
        icon: <Map />,
        description: "ul. Przykładowa 123, 00-000 Miasto",
    },
    {
        id: 1,
        icon: <Clock5 />,
        description: "Pon-Pt 8:00-17:00, Sob 9:00-14:00",
    },
    {
        id: 2,
        icon: <Phone />,
        description: "+48 123 456 789",
    }   
]
export const links = [
    {
        id: 0,
        href: "#hero",
        label: "Home",
    },
    {
        id: 1,
        href: "#offer",
        label: "Oferta",
    },
    {
        id: 2,
        href: "#contact",
        label: "Kontakt",
    }
]