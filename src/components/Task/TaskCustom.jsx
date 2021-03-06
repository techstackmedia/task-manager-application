import { useState, useMemo } from "react";
import { MdOutlineLibraryBooks, MdChat, MdMoreHoriz } from "react-icons/md";
import Pagination from "../PagePagination/PagePagination";
import task from "./Task.module.css";

let PageSize = 6;

const TaskCustom = ({ feedback }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return feedback.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, feedback]);

  const customTaskData = currentTableData.map((item) => {
    const color =
      item.confirm === "In Progress" ||
      item.confirm === "On hold" ||
      item.confirm === "Canceled"
        ? "#ccc"
        : "#716d6d";

    const alertColor = {
      backgroundColor:
        item.confirm === "In Review" || item.confirm === "Verify"
          ? "red"
          : "transparent",
    };

    const alertButton = {
      backgroundColor:
        item.confirm === "In Progress"
          ? "#2e64c9ed"
          : item.confirm === "In Review"
          ? "#c9c92eed"
          : item.confirm === "On hold"
          ? "#ccc"
          : item.confirm === "Canceled"
          ? "red"
          : null,
    };

    const taskType = {
      color:
        item.type === "Custom Task"
          ? "#716d6d"
          : item.type === "Marketing & Sales"
          ? "#f55671"
          : item.type === "Integrations"
          ? "#036e8f"
          : item.type === "Optimization"
          ? "#6ca714"
          : null,
      backgroundColor:
        item.type === "Custom Task"
          ? "#716d6d22"
          : item.type === "Marketing & Sales"
          ? "#f5567122"
          : item.type === "Integrations"
          ? "#036e8f22"
          : item.type === "Optimization"
          ? "#6ca71422"
          : null,
    };
    return (
      <>
        <div key={item.id} className={task.card}>
          <span className={task.notification}>
            <MdOutlineLibraryBooks size={28} />
            <div className={task.alert} style={alertButton}></div>
          </span>
          <span>
            <span className={task.item}>
              <h3>{item.description}</h3>
              <span className={task.taskType} style={taskType}>
                {item.type}
              </span>
            </span>
          </span>
          <span>
            <span className={task.item}>
              <h3>N{item.price}</h3>
              <small>Task price</small>
              <span className={task.delivery}>
                Delivery: <small>within {item.day} days</small>
              </span>
            </span>
          </span>
          <span>
            <img
              src={item.image}
              width={40}
              height={40}
              alt="person avatar"
              style={{ float: "left", marginRight: 15, borderRadius: "50%" }}
            />
            <span className={task.item}>
              <h3>{item.assigned}</h3>
              <p>Assigned to</p>
            </span>
          </span>
          <span>
            <span className={task.button}>
              {" "}
              <span className={task.buttonAlert}>
                <small style={alertButton}></small> {item.confirm}
              </span>
            </span>
          </span>
          <span className={task.chatBox}>
            <span>
              <MdChat size={18} color={color} className={task.chatIcon} />
            </span>
            <span className={task.chat} style={alertColor}></span>
            <MdMoreHoriz size={18} color={color} />
          </span>
        </div>
      </>
    );
  });
  return (
    <>
      {customTaskData[0]}
      {customTaskData.splice(1, feedback.length)}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={feedback.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default TaskCustom;
