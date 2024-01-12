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
import { layoutNavigationLinks } from "./_layoutNavigationConstants";
import classes from "./_layoutNavigation.module.scss";

export function LayoutNavigation() {
  const { key } = useLocation();
  const { windowWidth } = useWindowContext();

  const fixedContainerRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number>();

  const isMobile = windowWidth < breakPoint;

  // set menuHeight that can be used to fix the overlay problem with fixed position
  useLayoutEffect(() => {
    const fixedContainerHeight = fixedContainerRef.current?.offsetHeight ?? 0;
    setMenuHeight(fixedContainerHeight);
  }, [windowWidth]);

  // close the mobile menu on location change
  useEffect(() => {
    setOpen(false);
  }, [key]);

  // handle the scroll on the body, when the mobile menu opens
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
    <div
      className={classes.layoutNavigation}
      style={{ minHeight: menuHeight ?? undefined }}
    >
      <div className={classes.fixedContainer} ref={fixedContainerRef}>
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
            <nav>
              <ul>
                {layoutNavigationLinks.left.map(({ path, text }) => (
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

              <ul>
                {layoutNavigationLinks.right.map(({ path, text }) => (
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
