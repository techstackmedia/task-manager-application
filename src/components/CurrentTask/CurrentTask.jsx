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
        <span className={currentTask.label}>
          current{" "}
          <small className={currentTask.important}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              color: "#fff",
              backgroundColor: "#938c8c",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "lowercase",
              marginLeft: 3,
              fontSize: 8,
            }}
          >
            i
          </small>
        </span>
        <CustomTaskCustom />
        <span className={currentTask.label}>next</span>
        {taskList}
      </div>
    </section>
  );
};

export default CurrentTask;
