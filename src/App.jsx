import css from "./App.module.css";
import { useCounterStore } from "./store";

export default function App() {
  const count = useCounterStore((store) => store.count);
  const increment = useCounterStore((store) => store.increment);
  const decrement = useCounterStore((store) => store.decrement);
  return (
    <div id="App" className={css.app}>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {/* <Column state="planned" />
      <Column state="ongoing" />
      <Column state="done" /> */}
    </div>
  );
}
