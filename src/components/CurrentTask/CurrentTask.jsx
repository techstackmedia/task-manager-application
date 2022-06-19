import currentTask from './CurrentTask.module.css';
const CurrentTask = () => {
  return (
    <section className={currentTask.currentTask}>
      <div>
        <span>current</span>
        <div className={currentTask.card}>hvj</div>
      </div>
    </section>
  );
};

export default CurrentTask;
