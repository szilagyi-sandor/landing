import { errorContents } from "@shared/error";

// this is a special page, since this one is rendered without the shared layout.
export default function ErrorPageAtRoot() {
  const { title, message } = errorContents.internalServerError;

  return (
    <section>
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
    </section>
  );
}

// CHECKED 1.0
