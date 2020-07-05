//Agent de sante sidebar routes

import Compte from "views/agentSante/compte.jsx";
import history from "views/agentSante/history.jsx";


import SignalerCas from "views/agentSante/signaler.jsx";
import Gererzonesrisque from "views/agentSante/gererzonerisque.jsx";
import AgentSanteDashboard from "views/agentSante/agentSanteDashboard.jsx";
import AgentSanteNotifications from "views/agentSante/agentSanteNotifications.jsx";



const dashboardRoutesagent = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: AgentSanteDashboard,
    layout: "/agentsante"
  },
 
  
 
  {
    path: "/zonerisque",
    name: "MAJ des Centres",
    icon: "pe-7s-map-marker",
    component: Gererzonesrisque,
    layout: "/agentsante"
  },
  {
    path: "/evolution",
    name: "MAJ des cas",
    icon: "pe-7s-note2",
    component: SignalerCas,
    layout: "/agentsante"
  }, 

 
  
  {
    path: "/user",
    name: "Mon Compte",
    icon: "pe-7s-user",
    component: Compte,
    layout: "/agentsante"
  },
  {
    path: "/history",
    name: "Historique",
    icon: "pe-7s-clock",
    component: history,
    layout: "/agentsante"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: AgentSanteNotifications,
    layout: "/agentsante"
  },
 

 
 
  
];

export default dashboardRoutesagent;
