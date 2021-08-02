import {NavLink} from 'react-router-dom';
function Navbar () {
	return(
		<nav className='navbar navbar-dark bg-primary navbar-expand-lg justify-content-start'>
			<div className='navbar-brand'>
				Github поиск
			</div>
			<ul className = 'nav'>
				<li className='nav-item'>
					<NavLink exact to='/' className='nav-link link-light'>Главная</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to='/about' className='nav-link link-light'>Информация</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;
