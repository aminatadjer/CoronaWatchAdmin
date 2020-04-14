//moderateur sidebar routes


import EvolutionCasModerateur from "views/moderateur/evolutiondescas.jsx";
import ZonesRisqueModerateur from "views/moderateur/zonesarisque.jsx";
import CompteModerateur from "views/moderateur/compte.jsx";
import ModerateurNotifications from "views/moderateur/notifications.jsx";
import VeilleModerateur from "views/moderateur/veille.jsx"
import DashboardModerateur from "views/moderateur/dashboard.jsx"
import Articles from "views/moderateur/Articles.jsx";
import Commentaire from "views/moderateur/Commentaire";  
import Videos from "views/moderateur/Videos";  
import Validation from "views/moderateur/Validation";  
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DashboardModerateur,
    layout: "/moderateur"
  },
  
  {
    path: "/Articles",
    name: "Articles",
    icon: "pe-7s-news-paper",
    component: Articles,
    layout: "/moderateur"
  },
  
  {
    path: "/Validation",
    name: "Validation",
    icon: "pe-7s-news-paper",
    component: Validation,
    layout: "/moderateur"
  },
  
  {
    path: "/veille",
    name: "Veille",
    icon: "pe-7s-look",
    component: VeilleModerateur,
    layout: "/moderateur"
  },
  
  {
    path: "/evolution",
    name: "Evolution des cas",
    icon: "pe-7s-note2",
    component: EvolutionCasModerateur,
    layout: "/moderateur"
  },
  {
    path: "/zonerisque",
    name: "Zone à risques",
    icon: "pe-7s-map-marker",
    component: ZonesRisqueModerateur,
    layout: "/moderateur"
  },
  
  

  {
    path: "/Vidéos",
    name: "Vidéos utilisateur",
    icon: "pe-7s-film",
    component: Videos,
    layout: "/moderateur"
  }
  ,
  {
    path: "/Commentaire",
    name: "Commentaire",
    icon: "pe-7s-comment",
    component: Commentaire,
    layout: "/moderateur"
  },
  {
    path: "/user",
    name: "Mon Compte",
    icon: "pe-7s-user",
    component: CompteModerateur,
    layout: "/moderateur"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: ModerateurNotifications,
    layout: "/moderateur"
  },
 
 
 
  
];

export default dashboardRoutes;
