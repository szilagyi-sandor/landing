import { getErrorText, useErrorContext } from "@shared/error";
import classes from "./errorPage.module.scss";

export default function ErrorPage() {
  const error = useErrorContext();

  const { code, title, message } = getErrorText(error?.message);

  return (
    <section className={classes.errorPage}>
      <header>
        <h2>
          {code} - {title}
        </h2>
      </header>

      <p>{message}</p>

      <button
        onClick={() => {
          location.reload();
        }}
      >
        Refresh
      </button>
    </section>
  );
}

// CHECKED 1.0
