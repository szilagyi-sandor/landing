type Props = {
  loading?: boolean;
};

export function LoadingIndicator({ loading = true }: Props) {
  if (!loading) {
    return null;
  }

  return <div>Loading...</div>;
}

// CHECKED 1.0
