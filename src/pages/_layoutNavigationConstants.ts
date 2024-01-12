import { routes } from "@shared/constants";

export const email = "szilagyi.sandor.mark@gmail.com";

export const socialLinks = [
  {
    name: "GitHub",
    target: "_blank",
    url: "https://github.com/szilagyi-sandor",
  },
  {
    target: "_blank",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/szilagyi-sandor/",
  },
  {
    target: undefined,
    name: email,
    url: `mailto:${email}`,
  },
];

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
