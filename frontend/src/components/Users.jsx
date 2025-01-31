import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react"
import { GET_ALL_USERS, DELETE_USER } from "../query/userQuery.js";
import { Link } from "react-router-dom";

export const Users = () => {

    const [users, setUsers] = useState([]);

    const { data, loading, error, refetch: refetchAllUsers } = useQuery(GET_ALL_USERS,{
        fetchPolicy: 'no-cache',
    });
    const [delUser] = useMutation(DELETE_USER);

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
    }, [data])

    const deleteUser = (id) => {
        delUser({
            variables: {
                Id: parseInt(id)
            }
        }).then((res) => {
            if (res.data) {
                refetchAllUsers()
            }
        })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <ul>
                {
                    users.map(user => {
                        return <li>
                            <Link to={`/user/${user.Id}`}>{user.Name}</Link>
                            <button onClick={() => deleteUser(user.Id)}>Удалить</button>
                        </li>
                    })
                }
            </ul>

            <Link to={`/adduser`}>Создать</Link>
        </div>
    )
}