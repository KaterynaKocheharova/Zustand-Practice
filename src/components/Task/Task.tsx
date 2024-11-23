import classNames from "classnames";
import css from "./Task.module.css";
import { type Status } from "../../store";

type TaskProps = {
  title: string;
  status: Status;
};

const Task = ({ title, status }: TaskProps) => {
  return (
    <div className={css.task}>
      <p>{title}</p>
      <div className={css["bottom-wrapper"]}>
        <div></div>
        <div className={classNames(css.status, css[status])}>{status}</div>
      </div>
    </div>
  );
};

export default Task;
