import { Link } from 'react-router-dom';
import UserDisplay from './UserDisplay';

export default function Navbar({user}) {
	return (
		<div className='nav-bar'>
			<div className='left-side'>
		<h1 className='header'>NC News</h1>
		</div>
		<div className='right-side'>
		<nav >
			<Link to='/' className='nav-link'>
				Articles
			</Link>
			<Link to='/topics' className='nav-link'>
				Topics
			</Link>
			<Link to='/users' className='nav-link'>
				Users
			</Link>
		</nav>
<div className="user-display">
		<UserDisplay user={user} />
		</div>
		</div>		
		</div>
	);
}
