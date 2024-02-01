import { Products } from "../pages/products";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Faq } from "../pages/Faq";
import { Brand } from "../pages/brand/brand";
import { Contact } from "../pages/contact";
import { WhereTobuy } from "../pages/wheretobuy";

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

