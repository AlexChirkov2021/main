import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    const resultHandleDelete = (prevState) =>
      prevState.filter((user) => user._id !== userId);
    return setUsers(resultHandleDelete);
  };
  const renderPhrase = (number) => {
    return (
      <div className="badge bg-primary w-25" style={{ fontSize: 18 }}>
        {number > 1 && number < 5
          ? `${number} человека тусанут с тобой сегодня`
          : `${number} человек тусанет с тобой сегодня`}
      </div>
    );
  };

  const table = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <td>
                  {user.qualities.map((name) => {
                    return (
                      <span
                        className={`badge bg-${name.color} m-1`}
                        key={name._id}
                      >
                        {name.name}
                      </span>
                    );
                  })}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="badge bg-danger"
                    key={1}
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  if (users.length !== 0) {
    return (
      <div>
        {renderPhrase(users.length)}
        {table()}
      </div>
    );
  }
  return (
    <div className="">
      <span className="badge bg-danger w-25" style={{ fontSize: 18 }}>
        Никто не тусанет с тобой сегодня
      </span>
    </div>
  );
};

export default Users;
