import Notifications from "views/redacteur/Notifications.jsx";

import Redaction from "views/redacteur/Redaction.jsx";
import Historique from "views/redacteur/Historique.jsx";
import Profile from "views/redacteur/Profile.jsx";

const dashboardRoutesredacteur = [
  
    
      {
        path: "/Redaction",
        name: "Rédaction Articles",
        icon: "pe-7s-note2",
        component: Redaction,
        layout: "/redacteur"
      }, {
        path: "/Historique",
        name: "Historique  Articles",
        icon: "pe-7s-graph",
        component: Historique,
        layout: "/redacteur"
      }
      ,
      {
        path: "/user",
        name: "Mon compte ",
        icon: "pe-7s-user",
        component: Profile,
        layout: "/redacteur"
      },
      {
        path: "/notifications",
        name: "Notifications",
        icon: "pe-7s-bell",
        component: Notifications,
        layout: "/redacteur"
      }
     
    ];
    
    export default dashboardRoutesredacteur;
    