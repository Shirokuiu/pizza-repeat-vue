export default [
  {
    path: "/",
    name: "IndexHome",
    component: () => import("../views/Index"),
    children: [
      {
        path: "/login",
        name: "LoginPopup",
        component: () => import("../views/Login"),
      },
    ],
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart"),
  },
  {
    path: "/user",
    redirect: "/user/profile",
    name: "User",
    component: () => import("../views/User"),
    children: [
      {
        path: "/user/orders",
        name: "Orders",
        component: () => import("../views/Orders"),
      },
      {
        path: "/user/profile",
        name: "Profile",
        component: () => import("../views/Profile"),
      },
    ],
  },
];
