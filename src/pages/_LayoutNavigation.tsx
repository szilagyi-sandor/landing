import { Link } from "react-router-dom";
import { routes } from "@shared/constants";

const email = "szilagyi.sandor.mark@gmail.com";

const socialLinks = [
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

const links = [
  { path: routes.cv, text: "CV" },
  { path: routes.blog, text: "Blog" },
  { path: routes.contact, text: "Contact" },
  { path: routes.sandbox, text: "Sandbox" },
  { path: routes.references, text: "References" },
  { path: routes.technologies, text: "Technologies" },
  { path: "/not-found", text: "Not found" },
];

export function LayoutNavigation() {
  return (
    <div>
      <h1>
        <Link to={routes.home}>SSM</Link>
      </h1>

      <ul>
        {socialLinks.map(({ name, target, url }) => (
          <li key={name}>
            <a target={target} href={url}>
              {name}
            </a>
          </li>
        ))}
      </ul>

      <nav>
        <ul>
          {links.map(({ path, text }) => (
            <li key={path}>
              <Link to={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

// CHECKED 1.0
