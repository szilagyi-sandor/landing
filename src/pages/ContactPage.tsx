import { ComingSoonBanner } from "@shared/ui";
import classes from "./contactPage.module.scss";

export default function ContactPage() {
  return (
    <section className={classes.contactPage}>
      <header>
        <h2>Contact</h2>
      </header>

      <ComingSoonBanner />
    </section>
  );
}

// CHECKED 1.0
