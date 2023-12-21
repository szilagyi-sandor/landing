import classes from "./loadingIndicator.module.scss";

type Props = {
  loading?: boolean;
};

export function LoadingIndicator({ loading = true }: Props) {
  if (!loading) {
    return null;
  }

  return <div className={classes.loadingIndicator}>Loading...</div>;
}

// CHECKED 1.0
