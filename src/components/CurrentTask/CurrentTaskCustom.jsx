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
          <img
            src="https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1644990728693%2FWHHblb4Jn.jpeg%3Fw%3D150%26h%3D150%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
            width={40}
            height={40}
            alt="person avatar"
            style={{ float: "left", marginRight: 15, borderRadius: "50%" }}
          />
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
