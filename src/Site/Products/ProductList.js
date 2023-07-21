import paris from "./assets/travel/arch-gf0428a3ea_1280.jpg";
import tokyo from "./assets/travel/japan-g4a321079b_1280.jpg";
import mountains from "./assets/travel/mountains-gcc57b2547_1280.jpg";
import nyc from "./assets/travel/pedestrians-g25f6a634a_1280.jpg";
import beach from "./assets/travel/polynesia-gf6b7e3e96_1280.jpg";
import birthday from "./assets/celebrations/cake-g599fd6ad7_1280.jpg";
import christmas from "./assets/celebrations/christmas-gb52a1fbd1_1280.jpg";
import fireworks from "./assets/celebrations/fireworks-gb36e6b4ee_1280.jpg";
import teamVictory from "./assets/celebrations/man-g0f5df7744_1280.jpg";
import workParty from "./assets/celebrations/toast-gd0defdb08_1280.jpg";
import proposal from "./assets/romantic/couple-g6893399a0_1280.jpg";
import beachWalk from "./assets/romantic/couple-g7949a7cb5_1280.jpg";
import firstDate from "./assets/romantic/couple-ga493cad2e_1280.jpg";
import valentines from "./assets/romantic/valentines-day-g94bd7491f_1280.jpg";
import wedding from "./assets/romantic/wedding-ge92f8fe7f_1280.jpg";
import graduation from "./assets/school/friend-gff3aa0ad7_1280.jpg";
import schoolVictory from "./assets/school/lacrosse-g3ac9dc585_1280.jpg";
import firstDay from "./assets/school/pexels-keira-burton-6146978.jpg";
import groupProject from "./assets/school/pexels-rdne-stock-project-8500673.jpg";
import fired from "./assets/sad/pexels-antoni-shkraba-production-8279206.jpg";
import lost from "./assets/sad/pexels-kamaji-ogino-5064613.jpg";
import breakUp from "./assets/sad/pexels-vera-arsic-984949.jpg";
import loss from "./assets/sad/soccer-g4046557ef_1280.jpg";
import concert from "./assets/other/audience-g7729c7daf_1280.jpg";

const productList = [
  {
    name: "Travel",
    products: [
      { title: "Paris vacation", asset: paris },
      { title: "Tokyo vacation", asset: tokyo },
      { title: "Mountain vacation", asset: mountains },
      { title: "New York vacation", asset: nyc },
      { title: "Beach vacation", asset: beach },
    ],
  },
  {
    name: "Celebrations",
    products: [
      { title: "Birthday party", asset: birthday },
      { title: "Christmas day", asset: christmas },
      { title: "Fireworks festival", asset: fireworks },
      { title: "Your team won", asset: teamVictory },
      { title: "Work party", asset: workParty },
    ],
  },
  {
    name: "Romantic",
    products: [
      { title: "Proposal", asset: proposal },
      { title: "A walk on the beach", asset: beachWalk },
      { title: "First date", asset: firstDate },
      { title: "Valentines day", asset: valentines },
      { title: "Wedding", asset: wedding },
    ],
  },
  {
    name: "School",
    products: [
      { title: "Graduation", asset: graduation },
      { title: "Championship victory", asset: schoolVictory },
      { title: "First day at school", asset: firstDay },
      { title: "Group project", asset: groupProject },
    ],
  },
  {
    name: "Sad",
    products: [
      { title: "Got fired", asset: fired },
      { title: "Got lost", asset: lost },
      { title: "Broke up", asset: breakUp },
      { title: "Lost the game", asset: loss },
    ],
  },
  {
    name: "Other",
    products: [{ title: "Concert", asset: concert }],
  },
];

export default productList;
