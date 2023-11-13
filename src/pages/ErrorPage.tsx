import { getErrorText, useErrorContext } from "@shared/error";

export default function ErrorPage() {
  const error = useErrorContext();

  const { code, title, message } = getErrorText(error?.message);

  return (
    <section>
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
