import "../Pagination/Pagination.css";
import header from "./HeaderTask.module.css";

const HeaderTask = () => {
  return (
    <header className={header.header}>
      <nav>
        <ul className={header.checks}>
          <li>Active Task (2)</li>
          <li>Completed (1)</li>
          <li>Archived (6)</li>
          <li>Closed (0)</li>
        </ul>
        <ul>
          <li>Next</li>
          <li>
            <hr />
          </li>
          <li>Prev</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderTask;

/*
import { usePagination } from "../Pagination/usePagination";
import classnames from "classnames";
import "../Pagination/Pagination.css";
import header from "./HeaderTask.module.css";

const HeaderTask = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log(paginationRange)

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <header className={header.header}>
      <nav>
        <ul className={header.checks}>
          <li>Active Task (2)</li>
          <li>Completed (1)</li>
          <li>Archived (6)</li>
          <li>Closed (0)</li>
        </ul>
        <ul
          className={classnames("pagination-container", {
            [className]: className,
          })}
        >
          <li
            className={classnames("pagination-item", {
              disabled: currentPage === 1,
            })}
            onClick={onPrevious}
          >
            Next
          </li>

          <li
            className={classnames("pagination-item", {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            Prev
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderTask;
*/


