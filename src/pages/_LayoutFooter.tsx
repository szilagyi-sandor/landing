import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import classNames from "classnames";
import { useWindowContext } from "@shared/ui/WindowContext";
import { email, socialLinks } from "./_layoutNavigationConstants";
import classes from "./_layoutFooter.module.scss";
import GitHubIcon from "@assets/icons/github.svg?react";
import EmailIcon from "@assets/icons/envelope.svg?react";
import LinkedInIcon from "@assets/icons/linkedin.svg?react";

const { gitHub, linkedIn } = socialLinks;

type CopyState = {
  text: string;
  hasError?: boolean;
};

export function LayoutFooter() {
  const { windowWidth } = useWindowContext();

  const fixedContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  const [footerHeight, setFooterHeight] = useState<number>();
  const [copyState, setCopyState] = useState<CopyState>();

  // set footerHeight that can be used to fix the overlay problem with fixed position
  useLayoutEffect(() => {
    const fixedContainerHeight = fixedContainerRef.current?.offsetHeight ?? 0;
    setFooterHeight(fixedContainerHeight);
  }, [windowWidth]);

  useEffect(() => {
    if (copyState) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(
        () => {
          setCopyState(undefined);
        },
        copyState.hasError ? 6000 : 2000
      );
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [copyState]);

  const onEmailClick = useCallback(() => {
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(email);
        setCopyState({ text: "Copied to clipboard!" });
      } catch (error) {
        setCopyState({ text: email, hasError: true });
      }
    };

    void copy();
  }, []);

  return (
    <footer
      className={classes.layoutFooter}
      style={{ minHeight: footerHeight ?? undefined }}
    >
      <div className={classes.fixedContainer} ref={fixedContainerRef}>
        <div className={classes.container}>
          <span>© {new Date().getFullYear()} SSM</span>

          <div className={classes.contactContainer}>
            <button type="button" onClick={onEmailClick}>
              <EmailIcon />

              {copyState ? (
                <span
                  className={classNames({
                    [classes.hasError]: copyState.hasError,
                  })}
                >
                  {copyState.text}
                </span>
              ) : null}
            </button>

            <a
              target="_blank"
              href={linkedIn.url}
              rel="noreferrer"
              title={linkedIn.name}
            >
              <LinkedInIcon />
            </a>

            <a
              target="_blank"
              href={gitHub.url}
              rel="noreferrer"
              title={gitHub.name}
              className={classes.github}
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// CHECKED 1.0
