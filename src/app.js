import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import API from "./api";

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const count = users.length;

    const handleDetele = (userId) => {
        const resultHandleDelete = (prevState) =>
            prevState.filter((user) => user._id !== userId);
        return setUsers(resultHandleDelete);
    };

    if (count !== 0) {
        return (
            <div>
                <SearchStatus length={users.length} />
                <Users users={users} onDelete={handleDetele} count={count} />
            </div>
        );
    }
    return (
        <div>
            <span className="badge bg-danger w-25" style={{ fontSize: 18 }}>
                Никто не тусанет с тобой сегодня
            </span>
        </div>
    );
};
export default App;
