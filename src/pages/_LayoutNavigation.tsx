import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { breakPoint } from "@shared/ui";
import { routes } from "@shared/constants";
import { useWindowContext } from "@shared/ui/WindowContext";
import {
  layoutNavigationLinks,
  socialLinks,
} from "./_layoutNavigationConstants";
import classes from "./_layoutNavigation.module.scss";

type Props = {
  layoutPaddingBottom: number;
  setLayoutPaddingBottom: (param: number) => void;
};

export function LayoutNavigation({
  layoutPaddingBottom,
  setLayoutPaddingBottom,
}: Props) {
  const { key } = useLocation();
  const { windowWidth } = useWindowContext();

  const socialListRef = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(false);

  const isMobile = windowWidth < breakPoint;

  // set padding on the bottom for the fixed info bar on mobile
  useLayoutEffect(() => {
    const socialListHeight = socialListRef.current?.clientHeight ?? 0;
    setLayoutPaddingBottom(isMobile ? socialListHeight : 0);
  }, [windowWidth, setLayoutPaddingBottom, isMobile]);

  // close the mobile menu on location change
  useEffect(() => {
    setOpen(false);
  }, [key]);

  // handle the scroll on the body, when the
  useEffect(() => {
    const body = document.body;

    if (open && isMobile) {
      body.classList.add(classes.layoutNavigationOpen);

      if (body.scrollHeight > body.clientHeight) {
        body.classList.add(classes.scrollable);
      }
    } else {
      body.classList.remove(classes.layoutNavigationOpen, classes.scrollable);
    }
  }, [open, isMobile]);

  const toggleOpen = useCallback(() => {
    setOpen((previousState) => !previousState);
  }, []);

  return (
    <div className={classes.layoutNavigation}>
      <div className={classes.container}>
        <h1>
          <NavLink
            to={routes.home}
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            SSM
          </NavLink>
        </h1>

        <div className={classes.linksContainer}>
          <ul ref={socialListRef} className={classes.socialList}>
            {socialLinks.map(({ name, target, url }) => (
              <li key={name}>
                <a target={target} href={url}>
                  {name}
                </a>
              </li>
            ))}
          </ul>

          {isMobile ? (
            <button
              type="button"
              title="toggle mobile menu"
              onClick={toggleOpen}
            >
              <span />
              <span />
              <span />
            </button>
          ) : null}

          {!isMobile || open ? (
            <nav
              style={{
                paddingBottom: isMobile ? layoutPaddingBottom : undefined,
              }}
            >
              <ul>
                {layoutNavigationLinks.map(({ path, text }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// CHECKED 1.0
