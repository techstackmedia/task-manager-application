// import { GrCheckbox } from 'react-icons/gr';
import {
  SidebarTagsInterface as tags,
  SidebarTaskPriceRangeInterface as taskPriceRange,
} from './SidebarInterface';
import sidebar from './Sidebar.module.css';

const Sidebar = () => {
  const tagList = tags.map((tag) => {
    return (
      <li key={tag.id}>
        <div className={sidebar.svg}></div> <span>{tag.tag}</span>
      </li>
    );
  });

  const tagTaskPriceRangeList = taskPriceRange.map((task) => {
    return (
      <li key={task.id}>
        <div className={sidebar.svg}></div> <span>{task.taskPrice}</span>
      </li>
    );
  });

  return (
    <aside className={sidebar.sidebar}>
      <div>
        <div>
          <h4>Tags</h4>
          <ul>{tagList}</ul>
        </div>
        <div>
          <h4>Task Price Range</h4>
          <ul>{tagTaskPriceRangeList}</ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
