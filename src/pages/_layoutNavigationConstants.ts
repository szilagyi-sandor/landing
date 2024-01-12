import { routes } from "@shared/constants";

export const email = "szilagyi.sandor.mark@gmail.com";

export const socialLinks = {
  gitHub: {
    name: "GitHub",

    url: "https://github.com/szilagyi-sandor",
  },
  linkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/szilagyi-sandor/",
  },
};

export const layoutNavigationLinks = {
  left: [
    { path: routes.cv, text: "CV" },
    { path: routes.references, text: "References" },
    { path: routes.technologies, text: "Technologies" },
    { path: routes.blog, text: "Blog" },
    { path: routes.sandbox, text: "Sandbox" },
    { path: "/not-found", text: "Not found" },
  ],
  right: [{ path: routes.contact, text: "Contact" }],
};

// CHECKED 1.0
