//moderateur sidebar routes


import EvolutionCasModerateur from "views/moderateur/evolutiondescas.jsx";
import ZonesRisqueModerateur from "views/moderateur/zonesarisque.jsx";
import CompteModerateur from "views/moderateur/compte.jsx";
import ModerateurNotifications from "views/moderateur/notifications.jsx";
import VeilleModerateur from "views/moderateur/veille.jsx"
import DashboardModerateur from "views/moderateur/dashboard.jsx"


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DashboardModerateur,
    layout: "/moderateur"
  },
  {
    path: "/Article",
    name: "Article",
    icon: "pe-7s-news-paper",
    component: DashboardModerateur,
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
    path: "/video",
    name: "Vidéos Utilisateur",
    icon: "pe-7s-video",
    component: DashboardModerateur,
    layout: "/moderateur"
  },
  {
    path: "/commentaires",
    name: "Commentaires",
    icon: "pe-7s-comment",
    component: DashboardModerateur,
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
