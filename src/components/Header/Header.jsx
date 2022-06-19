import { MdAdd } from 'react-icons/md';
import logo from '../../logo.svg';
import header from './Header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="Drugstoc logo" />
          </li>
          <li>
            <button type="button">
              Add a new task <MdAdd />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
