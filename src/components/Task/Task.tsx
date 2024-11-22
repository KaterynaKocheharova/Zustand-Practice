import classNames from "classnames";
import css from "./Task.module.css";

type TaskProps = {
  title: string;
};

const STATUS = "DONE";

const Task = ({ title }: TaskProps) => {
  return (
    <div className={css.task}>
      <p>{title}</p>
      <div className={css["bottom-wrapper"]}>
        <div></div>
        <div className={classNames(css.status, css[STATUS])}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;