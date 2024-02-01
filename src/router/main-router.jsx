import { Doctors } from "../pages/doctors";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { News } from "../pages/news";
import { Services } from "../pages/services";
import { Contact } from "../pages/contact";

export const main_pages = [
  {
    component: <Home />,
  },
  {
    component: <About />,
    path: "about",
  },
  {
    component: <Services />,
    path: "services",
  },
  {
    component: <Doctors />,
    path: "doctors",
  },
  {
    component: <News />,
    path: "news",
  },
  {
    component: <Contact />,
    path: "contact",
  }
];

