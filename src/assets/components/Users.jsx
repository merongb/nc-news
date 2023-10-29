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
        <section className="user-container">
            <p>Return to <button><Link style={{ textDecoration: "none", color:"white"}} to="/"> Articles</Link></button></p>
        <ul className='user-list'>
            {users.map((user, index) => (
                <li key={user.username} className="user-card">
                    <img className='user-img' src={user.avatar_url} alt={user.avatar_url} />
                    <button className="user-button" id={index} onClick={selectUser}>{user.username}</button>
                </li>
            ))}
        </ul>
        </section>
    )
}