import { useEffect, useState } from "react";
import { getUsers } from "../../utils";
import { Link } from "react-router-dom";

export default function Users({setCurrentUser}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res.users)
        })
    }, [])

    function selectUser(e) {
		const user = users[e.target.id];
		setCurrentUser(user)
	}
    

    return (
        <section>
            <p>Return to <button><Link to="/"> Articles</Link></button></p>
        <ul>
            {users.map((user, index) => (
                <li key={user.username}>
                    {user.username}
                    <img src={user.avatar_url} alt={user.avatar_url} />
                    <button id={index} onClick={selectUser}>{user.username}</button>
                </li>
            ))}
        </ul>
        </section>
    )
}