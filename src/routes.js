
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import Redaction from "views/Redaction.jsx";
import Historique from "views/Historique.jsx";
import Profile from "views/Profile.jsx";
import Articles from "views/Articles.jsx";
import Commentaire from "views/Commentaire";  
import Videos from "views/Videos";  
const dashboardRoutes = [
  /*
{
  path: "/dashboard",
  name: "Dashboard",
  icon: "pe-7s-graph",
  component: Dashboard,
  layout: "/admin"
},{
  path: "/article",
  name: "Articles",
  icon: "pe-7s-news-paper",
  component: Articles,
  layout: "/admin"
},{
  path: "/Veille",
  name: "Veille",
  icon: "pe-7s-look",
  component: Videos,
  layout: "/admin"
},{
  path: "/evolution",
  name: "Évolution des cas",
  icon: "pe-7s-note2",
  component: TableList,
  layout: "/admin"
},
{
  path: "/typography",
  name: "Zones à risques",
  icon: "pe-7s-map-marker",
  component: Typography,
  layout: "/admin"
},
{
  path: "/Vidéos",
  name: "Vidéos utilisateur",
  icon: "pe-7s-film",
  component: Videos,
  layout: "/admin"
}



,{
  path: "/Commentaire",
  name: "Commentaires",
  icon: "pe-7s-credit",
  component: Commentaire,
  layout: "/admin"
},{
  path: "/user",
  name: "Mon compte",
  icon: "pe-7s-user",
  component: UserProfile,
  layout: "/admin"
},
{
  path: "/notifications",
  name: "Notifications",
  icon: "pe-7s-bell",
  component: Notifications,
  layout: "/admin"
}
 */
  {
    path: "/Redaction",
    name: "Rédaction Articles",
    icon: "pe-7s-note2",
    component: Redaction,
    layout: "/admin"
  }, {
    path: "/Historique",
    name: "Historique  Articles",
    icon: "pe-7s-graph",
    component: Historique,
    layout: "/admin"
  }
  ,
  {
    path: "/user",
    name: "Mon compte ",
    icon: "pe-7s-user",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  }
  /*
  ,
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
