import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='nav-bar'>
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
	);
}
