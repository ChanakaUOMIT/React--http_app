// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import LoginLayout from "./layouts/LoginLayout";
import views from "./views/views";


// views
import Views from "./views/views";

// const loggedUser = Authorization([UserRole.SUPER_USER])

const routes = [
  //----------- seller --------------
  {
    path: "/photographer",
    layout: DefaultLayout,
    exact: true,
    component: views.PhotographerView,
  },
  {
    path: "/salon",
    layout: DefaultLayout,
    exact: true,
    component: views.SalonView,
  },
  {
    path: "/login",
    layout: LoginLayout,
    exact: true,
    component: views.LoginView,
  },
  {
    path: "/register",
    layout: LoginLayout,
    exact: true,
    component: views.RegisterView,
  },
  {
    path: "/all-vendors",
    layout: DefaultLayout,
    exact: true,
    component: Views.ListingPageView,
  },
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: Views.HomeView,
  },
  // //should be last one
  // {
  //   layout: DefaultLayout,
  //   component: Views.PageNotFoundView,
  // },
];

export default routes;
