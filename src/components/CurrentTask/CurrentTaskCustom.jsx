import { MdOutlineLibraryBooks, MdChat, MdMoreHoriz } from "react-icons/md";
import currentTask from "./CurrentTask.module.css";

const CurrentTaskCustom = () => {
  return (
    <>
      <div className={currentTask.card}>
        <span className={currentTask.notification}>
          <MdOutlineLibraryBooks size={28} />
          <div className={currentTask.alert}></div>
        </span>
        <span>
          <span className={currentTask.item}>
            <h3>Increase confidence with TrustPilots reviews</h3>
            <span className={currentTask.taskType}>Custom Task</span>
          </span>
        </span>
        <span>
          <span className={currentTask.item}>
            <h3>N500.00</h3>
            <small>Task price</small>
            <span className={currentTask.delivery}>
              Delivery: <small>within 3 days</small>
            </span>
          </span>
        </span>
        <span>
          <span className={currentTask.item}>
            <h3>Adamu Musa</h3>
            <p>Assigned to</p>
          </span>
        </span>
        <span>
          <span className={currentTask.button}>
            {" "}
            <span className={currentTask.buttonAlert}>
              <small></small> Verify
            </span>
          </span>
        </span>
        <span className={currentTask.chatBox}>
          <span>
            <MdChat
              size={18}
              color="#716d6d"
              className={currentTask.chatIcon}
            />
          </span>
          <span className={currentTask.chat}></span>
          <MdMoreHoriz size={18} color="#716d6d" />
        </span>
      </div>
    </>
  );
};

export default CurrentTaskCustom;
