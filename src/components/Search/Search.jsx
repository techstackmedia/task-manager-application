import { MdSearch, MdSort } from 'react-icons/md';
import search from './Search.module.css';

const Search = () => {
  return (
    <section className={search.search}>
      <div>
        <label htmlFor="search">
          <div>
            <div className={search.left}>
              <MdSearch color="#ccc" />
            </div>
            <div className={search.right}>
              <span>Sort by</span>
              <MdSort color="#716d6d" />
            </div>
          </div>
        </label>
        <hr />
        <input type="text" id="search" placeholder="Search Keyword" />
      </div>
    </section>
  );
};

export default Search;
