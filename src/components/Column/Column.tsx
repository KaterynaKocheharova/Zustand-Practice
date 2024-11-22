import css from "./Column.module.css";

type ColumnProps = {
  state: "planned" | "ongoing" | "done";
};
const Column = ({ state }: ColumnProps) => {
  return <div className={css.column}>{state}</div>;
};

export default Column;
