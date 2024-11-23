import { useMemo } from "react";
import { useTasksStore, type Status } from "../../store";
import Task from "../Task/Task";
import css from "./Column.module.css";

type ColumnProps = {
  state: Status;
};

const Column = ({ state }: ColumnProps) => {
  const tasks = useTasksStore((store) => store.tasks);
  const filtered = useMemo(
    () => tasks.filter((task) => task.status === state),
    [tasks, state]
  );

  return (
    <div className={css.column}>
      <div className={css.top}>
        <button>Add</button>
        <p>{state}</p>
      </div>

      {filtered.map((task) => {
        return (
          <Task key={task.title} title={task.title} status={task.status} />
        );
      })}
    </div>
  );
};

export default Column;
