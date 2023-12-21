import { ComingSoonBanner } from "@shared/ui";
import classes from "./blogPage.module.scss";

export default function BlogPage() {
  return (
    <section className={classes.blogPage}>
      <header>
        <h2>Blog</h2>
      </header>

      <ComingSoonBanner />
    </section>
  );
}

// CHECKED 1.0
