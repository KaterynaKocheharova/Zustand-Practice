import css from "./App.module.css";
import Column from "./components/Column/Column";

export default function App() {
  return (
    <div id="App" className={css.app}>
      <Column state="planned" />
      <Column state="ongoing" />
      <Column state="done" />
    </div>
  );
}
