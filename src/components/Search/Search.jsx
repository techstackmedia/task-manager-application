import { MdSearch, MdSort } from "react-icons/md";
import search from "./Search.module.css";

const Search = ({ handleSortClick }) => {
  return (
    <section className={search.search}>
      <div>
        <label htmlFor="search">
          <div>
            <div>
              <MdSearch color="#ccc" />
            </div>
            <div>
              <span>Sort by</span>
              <MdSort color="#716d6d" onClick={handleSortClick} />
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
