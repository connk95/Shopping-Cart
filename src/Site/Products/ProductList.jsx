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
import beachWalk from "./assets/romantic/couple-g6893399a0_1280.jpg";
import proposal from "./assets/romantic/couple-g7949a7cb5_1280.jpg";
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
      { title: "Paris vacation", asset: paris, price: 0 },
      { title: "Tokyo vacation", asset: tokyo, price: 0 },
      { title: "Mountain vacation", asset: mountains, price: 0 },
      { title: "New York vacation", asset: nyc, price: 0 },
      { title: "Beach vacation", asset: beach, price: 0 },
    ],
  },
  {
    name: "Celebrations",
    products: [
      { title: "Birthday party", asset: birthday, price: 0 },
      { title: "Christmas day", asset: christmas, price: 0 },
      { title: "Fireworks festival", asset: fireworks, price: 0 },
      { title: "Your team won", asset: teamVictory, price: 0 },
      { title: "Work party", asset: workParty, price: 0 },
    ],
  },
  {
    name: "Romantic",
    products: [
      { title: "Proposal", asset: proposal, price: 0 },
      { title: "A walk on the beach", asset: beachWalk, price: 0 },
      { title: "First date", asset: firstDate, price: 0 },
      { title: "Valentines day", asset: valentines, price: 0 },
      { title: "Wedding", asset: wedding, price: 0 },
    ],
  },
  {
    name: "School",
    products: [
      { title: "Graduation", asset: graduation, price: 0 },
      { title: "Championship victory", asset: schoolVictory, price: 0 },
      { title: "First day at school", asset: firstDay, price: 0 },
      { title: "Group project", asset: groupProject, price: 0 },
    ],
  },
  {
    name: "Sad",
    products: [
      { title: "Got fired", asset: fired, price: 0 },
      { title: "Got lost", asset: lost, price: 0 },
      { title: "Broke up", asset: breakUp, price: 0 },
      { title: "Lost the game", asset: loss, price: 0 },
    ],
  },
  {
    name: "Other",
    products: [{ title: "Concert", asset: concert, price: 0 }],
  },
];

export default productList;
