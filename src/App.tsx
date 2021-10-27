import { greet } from "./utils/greet";
import { FizzBuzz } from "./components/FizzBuzz"

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("World")}</h1>
      <FizzBuzz />
    </>
  )
}

export default App;
