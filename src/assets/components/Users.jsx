import { useEffect, useState } from "react";
import { getUsers } from "../../utils";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.users)
        })
    }, [])

    return (
        <ul>
            {users.map((user) => (
                <li key={user.username}>
                    {user.username}
                </li>
            ))}
        </ul>
    )
}