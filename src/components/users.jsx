import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, count }) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    console.log(userCrop);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <User users={users} delete={onDelete} userCrop={userCrop} />
                </tbody>
            </table>
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
            ;
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

export default Users;
