import { ComingSoonBanner } from "@shared/ui";
import classes from "./technologiesPage.module.scss";

export default function TechnologiesPage() {
  return (
    <section className={classes.technologiesPage}>
      <header>
        <h2>Technologies</h2>
      </header>

      <ComingSoonBanner />
    </section>
  );
}

// CHECKED 1.0
