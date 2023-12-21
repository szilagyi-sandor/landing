import { ComingSoonBanner } from "@shared/ui";
import classes from "./referencesPage.module.scss";

export default function ReferencesPage() {
  return (
    <section className={classes.referencesPage}>
      <header>
        <h2>References</h2>
      </header>

      <ComingSoonBanner />
    </section>
  );
}

// CHECKED 1.0
