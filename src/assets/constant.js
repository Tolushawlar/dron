import {
  FaBook,
  FaChartPie,
  FaLightbulb,
  FaTicketAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

export const menuData = [
  {
    title: "Overview",
    icon: <FaChartPie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Hotels",
    icon: <FaTicketAlt style={{ marginRight: "0.5rem" }} />,
    active: true,
  },
  {
    title: "Contacts",
    icon: <FaUsers style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Agents",
    icon: <FaUserTie style={{ marginRight: "0.5rem" }} />,
  },
  {
    title: "Docuemnts",
    icon: <FaBook style={{ marginRight: "0.5rem" }} />,
  },
];

export const tableTitles = [
  "Name",
  "Address",
  "Phone",
  "url",
  "Email",
  "Lat",
  "Long",
];

export const data = [
  [
    "Beili Helyg Guest House",
    "Cwm Cadlan, Penderyn, CF44 0YJ",
    "+44 0 1685 813609",
    "http://www.beilihelygguesthouse.co.uk",
    "willow.walks@hotmail.co.uk",
    51.7823,
    -3.4959,
  ],
  [
    "Valentines Resort & Marina",
    "Harbour Island, North Eleuthera, Bahamas",
    "(866) 389-6864",
    "http://www.valentinesresort.com/",
    "willow.walks@hotmail.co.uk",
    25.49725,
    -76.63674,
  ],
  [
    "Puerto Iguazú",
    "Poramba Hostel",
    "+54 3757 423041",
    "info@porambahostel.com",
    "http://porambahostel.com",
    -25.59587,
    -54.567661,
  ],
  [
    "Matkustajakoti Turisti-Lappee",
    "Kauppakatu 52",
    "+358 5 415 0800",
    "http://www.valentinesresort.com/",
    "willow.walks@hotmail.co.uk",
    61.0541,
    28.1911,
  ],
  [
    "Hotel Lotus",
    "Hoofdpoortstraat 22",
    "+31 111 413456",
    "info@hotellotus.nl",
    "http://www.hotellotus.nl",
    51.64716,
    3.91839,
  ],

  [
    "Penzion pod Zámkem",
    "Ul. 1. máje 97",
    "+420 327 314 143",
    "info@penzion-podzamkem.cz",
    "http://www.penzion-podzamkem.cz/",
    49.74411,
    15.10354,
  ],
  [
    "Panhans Hotel",
    "Grand Hotel am Semmering",
    "+43 2664 8181",
    "hotel@panhans.at",
    "http://www.panhans.at/",
    47.636897,
    15.825309,
  ],
];
