import CustomTaskCustom from "./CurrentTaskCustom";
import { TaskData as tasks } from "../../mock/TaskData";
import currentTask from "./CurrentTask.module.css";

const CurrentTask = () => {
  const taskList = tasks
    .map((item) => {
      return <CustomTaskCustom />;
    })
    .slice(1, tasks.length);
  return (
    <section className={currentTask.currentTask}>
      <div>
        <span className={currentTask.label}>current</span>
        <CustomTaskCustom />
        <span
          className={currentTask.label}
          style={{ marginTop: "30px", display: "block" }}
        >
          next
        </span>
        {taskList}
      </div>
    </section>
  );
};

export default CurrentTask;
