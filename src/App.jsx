import css from "./App.module.css";
import Counter from "./components/Counter/Counter";

export default function App() {
  return (
    <div id="App" className={css.app}>
      <Counter />
      {/* <Column state="planned" />
      <Column state="ongoing" />
      <Column state="done" /> */}
    </div>
  );
}
