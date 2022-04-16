import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    return (
        <div
            className="badge bg-primary"
            style={{ fontSize: 18, display: "flex", width: "350px" }}
        >
            <span>
                {length > 1 && length < 5
                    ? `${length} человека тусанут с тобой сегодня`
                    : `${length} человек тусанет с тобой сегодня`}
            </span>
        </div>
    );
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
