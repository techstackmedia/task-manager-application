import CustomTaskCustom from "./CurrentTaskCustom";
import currentTask from "./CurrentTask.module.css";

const CurrentTask = () => {
  return (
    <section className={currentTask.currentTask}>
      <div>
        <span className={currentTask.label}>current</span>
        <CustomTaskCustom />
        <span className={currentTask.label} style={{marginTop: '30px', display: 'block'}}>Next</span>
        <CustomTaskCustom />
      </div>
    </section>
  );
};

export default CurrentTask;
