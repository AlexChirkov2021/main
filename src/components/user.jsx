import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";

const User = (props) => {
    return props.userCrop.map((user) => {
        return (
            <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                    {user.qualities.map((quality) => {
                        return (
                            <Qualities
                                color={quality.color}
                                _id={quality._id}
                                name={quality.name}
                                key={quality._id}
                            />
                        );
                    })}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                    <Bookmark />
                </td>
                <td>
                    <button
                        className="badge bg-danger"
                        key={1}
                        onClick={() => props.delete(user._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        );
    });
};
export default User;
