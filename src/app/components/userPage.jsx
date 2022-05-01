/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [selectedUser, setSelectedUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setSelectedUser(data));
    }, []);

    const handleSave = () => {
        history.replace("/users");
    };
    console.log(selectedUser);
    if (selectedUser) {
        return (
            <>
                <h1>{selectedUser.name}</h1>
                <h1>
                    Профессия: {Object.values(selectedUser.profession.name)}
                </h1>
                {selectedUser.qualities.map((quality) => (
                    <p
                        className={"badge m-1 bg-" + quality.color}
                        key={quality._id}
                    >
                        {quality.name}
                    </p>
                ))}

                <p>completedMeetings: {selectedUser.completedMeetings}</p>
                <h1>rate: {selectedUser.rate}</h1>
                <button onClick={() => handleSave()}>Все пользователи</button>
            </>
        );
    }
    return "...loading";
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
