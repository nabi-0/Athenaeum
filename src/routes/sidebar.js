/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/mypage",
    icon: "FormsIcon",
    name: "My Page",
  },
  {
    path: "/app/watchlist",
    icon: "CardsIcon",
    name: "Watchlist",
  },
  {
    path: "/app/popular",
    icon: "ChartsIcon",
    name: "Popular Items",
  },
  {
    path: "/app/discover",
    icon: "ButtonsIcon",
    name: "Discover",
  },

  {
    icon: "PagesIcon",
    name: "Account Services",
    routes: [
      // submenu
      {
        path: "/friends",
        name: "Friends",
      },
      {
        path: "/listings",
        name: "My Listings",
      },
      {
        path: "/user-info",
        name: "User Info",
      },
      {
        path: "/settings",
        name: "Settings",
      },
    ],
  },
];

export default routes;
