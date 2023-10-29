import { Link } from "react-router-dom";

function UserDisplay({ user }) {
  return (
    <div >
      {user.username ? (
        <div className="user-info-container">
          <p>Welcome, {user.username}!</p>
          <Link to='/users' className='nav-link'>
          <img className="userdisplay-img" src={user.avatar_url} alt="" />
          </Link>
        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}
    </div>
  );
}

export default UserDisplay;
