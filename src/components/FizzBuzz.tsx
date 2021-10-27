//https://wonderful-gates-6a8505.netlify.app/

import { fizzbuzz } from "../utils/fizzbuzz";
import { useState } from "react";

export function FizzBuzz(): JSX.Element {
  const [state, setState] = useState<(string | number)[]>([1]);

  const nextNum = () => {
    //const fizzbuzzResult = fizzbuzz(state.length + 1)
    setState((state) => [...state, fizzbuzz(state.length + 1)]);
  };

  const clear = () => {
    setState((state) => [1]);
  };

  return (
    <>
      <p>{state.join(" ,")}</p>
      <button onClick={nextNum}>NEXT</button>
      <button onClick={clear}>RESET</button>
    </>
  );
}
