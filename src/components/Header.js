import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../hooks/darkMode'

const Header = () => {
	const [theme, toggleTheme] = useDarkMode()

	return (
		<React.Fragment>
			<h1>Hacker News Clone</h1>
			<button
				type="checkbox"
				name="theme"
				id="theme"
				onClick={() => toggleTheme(!theme)}
			>
				{theme === 'dark' ? 'Dark' : 'Light'}
			</button>
			<div className="nav-link">
				<NavLink to="/top" activeClassName="active">
					Top Stories
				</NavLink>
				<NavLink to="/new" activeClassName="active">
					Latest Stories
				</NavLink>
				<NavLink to="/best" activeClassName="active">
					Best Stories
				</NavLink>
			</div>
		</React.Fragment>
	)
}

export default Header
