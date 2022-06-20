import { MdOutlineLibraryBooks, MdChat, MdMoreHoriz } from "react-icons/md";
import { useState, useMemo } from "react";
import Pagination from "../Pagination/Pagination";
import { TaskData as data } from "../../mock/TaskData";
import task from "./Task.module.css";

let PageSize = 6;

const TaskCustom = ({ feedback }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return feedback.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const customTaskData = currentTableData.map((item) => {
    return (
      <>
        <div key={item.id} className={task.card}>
          <span className={task.notification}>
            <MdOutlineLibraryBooks size={28} />
            <div className={task.alert}></div>
          </span>
          <span>
            <span className={task.item}>
              <h3>{item.description}</h3>
              <span className={task.taskType}>{item.type}</span>
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
                <small></small> {item.verify}
              </span>
            </span>
          </span>
          <span className={task.chatBox}>
            <span>
              <MdChat size={18} color="#716d6d" className={task.chatIcon} />
            </span>
            <span className={task.chat}></span>
            <MdMoreHoriz size={18} color="#716d6d" />
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
