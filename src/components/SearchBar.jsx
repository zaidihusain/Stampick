'use client';
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Search } from "lucide-react";

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  const updateDropdownPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    updateDropdownPosition(); // Initial positioning
    window.addEventListener("resize", updateDropdownPosition); // Reposition on window resize
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, []);

  const Dropdown = () => {
    if (!isOpen) return null;

    return createPortal(
      <div
        ref={dropdownRef}
        style={{
          position: "absolute",
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`,
          zIndex: 9999,
        }}
        className="bg-zinc-800 text-white text-sm rounded-lg shadow-lg transition-transform duration-300 transform scale-y-100 origin-top"
      >
        <ul className="py-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setQuery(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-400">No results found</li>
          )}
        </ul>
      </div>,
      document.body
    );
  };

  return (
    <div className="relative w-[20rem]">
      <input
        ref={inputRef}
        type="text"
        className="bg-[#222528] text-gray-200 text-sm py-2 pl-4 rounded-lg w-full focus:outline-none"
        placeholder="Search for collections, stamps or users"
        value={query}
        onChange={handleSearch}
        onFocus={updateDropdownPosition} // Update position when the input is focused
      />
      <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
        <Search className="w-4" />
      </span>

      
      <Dropdown />
    </div>
  );
};

export default SearchBar;
