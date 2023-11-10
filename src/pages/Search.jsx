import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
    return (
        <div id="search">
            <div className="search_inner">
                <form onSubmit={(e) => e.preventDefault()} className="search_form">
                    <label htmlFor="search_input" className="ir"></label>
                    <div className="search_input_box">
                        <input
                            type="serach"
                            name="search_input"
                            id="search_input"
                            autoComplete="off"
                            placeholder="검색"
                            className="search_input"
                        />
                        <button type="submit" className="search_btn">
                            <BsSearch />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
