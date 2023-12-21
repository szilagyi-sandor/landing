import { ComingSoonBanner } from "@shared/ui";
import classes from "./cvPage.module.scss";

export default function CvPage() {
  return (
    <section className={classes.cvPage}>
      <header>
        <h2>CV</h2>
      </header>

      <ComingSoonBanner />
    </section>
  );
}

// CHECKED 1.0
