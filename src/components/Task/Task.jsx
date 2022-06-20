import TaskCustom from "./TaskCustom";
import task from "./Task.module.css";

const Task = ({ feedback }) => {
  return (
    <section className={task.task}>
      <div>
        <span className={task.label}>current</span>
        <TaskCustom feedback={feedback} />
      </div>
    </section>
  );
};

export default Task;
