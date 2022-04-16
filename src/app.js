import React, { useEffect, useState } from "react";
import Users from "./components/users";
import API from "./api";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDetele = (userId) => {
        const resultHandleDelete = (prevState) =>
            prevState.filter((user) => user._id !== userId);
        return setUsers(resultHandleDelete);
    };
    if (users) {
        const count = users.length;
        if (count !== 0) {
            return (
                <div>
                    <Users users={users} onDelete={handleDetele} />
                </div>
            );
        }
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
