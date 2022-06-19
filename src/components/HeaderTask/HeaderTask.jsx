import header from './HeaderTask.module.css';

const HeaderTask = () => {
  return (
    <header className={header.header}>
      <nav>
        <ul>
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
