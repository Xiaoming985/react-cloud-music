const routes = [
  {
    path: "/",
    component: "",
    exact: true
  },
  {
    path: "/index",
    component: "",
    children: [
      {
        path: "",
        component: ""
      },
      {
        path: "",
        component: ""
      }
    ]
  }
];

export default routes;