import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import classNames from "classnames";
import { useWindowContext } from "@shared/ui";
import { useAppsettingsContext } from "@shared/settings";
import classes from "./_layoutFooter.module.scss";
import GitHubIcon from "@assets/icons/github.svg?react";
import EmailIcon from "@assets/icons/envelope.svg?react";
import LinkedInIcon from "@assets/icons/linkedin.svg?react";

type CopyState = {
  text: string;
  hasError?: boolean;
};

export function LayoutFooter() {
  const { windowWidth } = useWindowContext();
  const { contact } = useAppsettingsContext();

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

  const email = contact?.email;
  const githubUrl = contact?.socials?.github;
  const linkedinUrl = contact?.socials?.linkedin;

  const onEmailClick = useCallback(() => {
    const copy = async () => {
      if (email) {
        try {
          await navigator.clipboard.writeText(email);
          setCopyState({ text: "Copied to clipboard!" });
        } catch (error) {
          setCopyState({ text: email, hasError: true });
        }
      }
    };

    void copy();
  }, [email]);

  return (
    <footer
      className={classes.layoutFooter}
      style={{ minHeight: footerHeight ?? undefined }}
    >
      <div className={classes.fixedContainer} ref={fixedContainerRef}>
        <div className={classes.container}>
          <span>© {new Date().getFullYear()} SSM</span>

          <div className={classes.contactContainer}>
            {email ? (
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
            ) : null}

            {linkedinUrl ? (
              <a
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                href={linkedinUrl}
              >
                <LinkedInIcon />
              </a>
            ) : null}

            {githubUrl ? (
              <a
                title="GitHub"
                target="_blank"
                href={githubUrl}
                rel="noreferrer"
                className={classes.github}
              >
                <GitHubIcon />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

// CHECKED 1.0
