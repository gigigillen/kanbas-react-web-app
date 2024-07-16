import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    return(
        <div className="input-group col-md-4">
        <span className="input-group-append">
          <button className="btn border-end-0 border rounded-0">
            <BsSearch />
          </button>
        </span>
        <input className="py-1 border-start-0 border" placeholder="Search..." />
      </div>
    )
}