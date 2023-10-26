
function UserDisplay({ user }) {
  return (
    <div>
      {user.username ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}
    </div>
  );
}

export default UserDisplay;
