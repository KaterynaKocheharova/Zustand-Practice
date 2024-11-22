import Column from "./components/Column/Column";
import css from "./App.module.css";

export default function App() {
  return (
    <div id="App" className={css.app}>
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}
