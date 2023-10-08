import { ErrorMessage } from "./domain";

type Props = {
  errorMessage: ErrorMessage;
};

function ErrorThrower({ errorMessage }: Props): JSX.Element {
  throw new Error(errorMessage);
}

export { ErrorThrower };

// CHECKED 1.0
