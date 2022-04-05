import React from "react";

const SearchStatus = ({ length }) => {
  return (
    <div
      className="badge bg-primary w-25"
      style={{ fontSize: 18, display: "flex" }}
    >
      {length > 1 && length < 5
        ? `${length} человека тусанут с тобой сегодня`
        : `${length} человек тусанет с тобой сегодня`}
    </div>
  );
};

export default SearchStatus;
