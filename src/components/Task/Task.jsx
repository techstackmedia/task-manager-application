import CustomTaskCustom from "./TaskCustom";
import task from "./Task.module.css";


const Task = () => {
  return (
    <section className={task.task}>
      <div>
        <span className={task.label}>current</span>
        <CustomTaskCustom />
      </div>
    </section>
  );
};

export default Task;
