import css from "./Task.module.css";

type TaskProps = {
  title: string;
};

const STATUS = "PANNED";

const Task = ({ title }: TaskProps) => {
  return (
    <div className={css.task}>
      <p>{title}</p>
      <div className={css["bottom-wrapper"]}>
        <div></div>
        <div className={css.status}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
