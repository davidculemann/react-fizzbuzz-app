//import { fizzbuzz } from "../utils/fizzbuzz";
import { useState } from "react";

export function FizzBuzz(): JSX.Element {
  const [state, setState] = useState<number[]>([1]);

  const nextNum = () => {
    setState((state) => [...state, 1]);
  };

  return (
    <>
      <p>{state}</p>;<button onClick={nextNum}></button>
    </>
  );
}
