import classes from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <section className={classes.homePage}>
      <div className={classes.container}>
        <header>
          <h2>Hello!</h2>
        </header>

        <p>
          I'm Sándor Szilágyi, a full stack developer and this is my website.
        </p>
      </div>
    </section>
  );
}

// CHECKED 1.0
