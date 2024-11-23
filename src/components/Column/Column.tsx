import { useStore } from "../../store";
import Task from "../Task/Task";
import css from "./Column.module.css";

const STATUS = {
  PLANNED: "planned",
  ONGOING: "ongoing",
  DONE: "done",
};

type StatusKeys = keyof typeof STATUS;

type ColumnProps = {
  state: StatusKeys;
};

const Column = ({ state }: ColumnProps) => {
  const tasks = useStore((state) => state.tasks);
  console.log(tasks)
  return (
    <div className={css.column}>
      <p>{state}</p>
      <Task title="to do" />
    </div>
  );
};

export default Column;
