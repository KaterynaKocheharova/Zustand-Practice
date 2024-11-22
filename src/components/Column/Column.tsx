import Task from "../Task/Task";
import css from "./Column.module.css";

const STATUS = {
  PLANNED: "planned",
  ONGOING: "ongoing",
  DONE: "done",
};

type ColumnProps = {
  state: keyof typeof STATUS;
};

const Column = ({ state }: ColumnProps) => {
  return (
    <div className={css.column}>
      <p>{state}</p>
      <Task title="to do" />
    </div>
  );
};

export default Column;
