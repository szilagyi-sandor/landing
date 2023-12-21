import { errorContents } from "@shared/error";
import classes from "./errorPageAtRoot.module.scss";

// this is a special page, since this one is rendered without the shared layout.
export default function ErrorPageAtRoot() {
  const { title, message } = errorContents.internalServerError;

  return (
    <section className={classes.errorPageAtRoot}>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <header>
            <h1>{title}</h1>
          </header>

          <main>
            <p>{message}</p>

            <button
              onClick={() => {
                location.reload();
              }}
            >
              Refresh
            </button>
          </main>
        </div>
      </div>
    </section>
  );
}

// CHECKED 1.0
