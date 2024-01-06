import React from "react";

const SearchBar = () => {
  return (
    <form className="py-2 text-sm w-96">
      <div className="text-black">
        <input placeholder="Search for products, brands and categories..." className="text-[12px] py-1 px-2 rounded-md w-full"/>
      </div>    
    </form>);
};

export default SearchBar;
