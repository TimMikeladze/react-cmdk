import React, { forwardRef, Fragment, Ref } from "react";
interface SearchProps {
  onChange: (value: string) => void;
  placeholder?: string;
  prefix?: string[];
  value: string;
  searchIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
}

function Search(
  { searchIcon, onChange, placeholder, prefix, value, clearIcon }: SearchProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className="flex items-center space-x-1.5 px-3">
      {searchIcon}

      {prefix?.length
        ? prefix.map((p) => {
            return (
              <Fragment key={p}>
                <span className="dark:text-white">{p}</span>
                <span className="text-gray-500">/</span>
              </Fragment>
            );
          })
        : null}

      <div className="flex relative w-full">
        <input
          ref={ref}
          spellCheck={false}
          className="py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-gray-500 dark:text-white"
          onChange={(e) => {
            onChange(e.currentTarget.value);
          }}
          onFocus={(e) => {
            e.currentTarget.select();
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape" && value) {
              e.preventDefault();
              e.stopPropagation();
              onChange("");
            }
          }}
          id="command-palette-search-input"
          placeholder={placeholder}
          value={value}
          type="text"
          autoFocus
        />

        {value && (
          <button
            tabIndex={-1}
            type="button"
            onClick={() => {
              onChange("");
              const inputElement = document.getElementById(
                "command-palette-search-input"
              );
              if (inputElement) {
                inputElement.focus();
              }
            }}
          >
            {clearIcon}
          </button>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Search);
