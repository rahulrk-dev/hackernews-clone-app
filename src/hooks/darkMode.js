import { useEffect, useState } from 'react'

export const useDarkMode = () => {
	const [theme, setTheme] = useState('dark')
	const toggleTheme = () => {
		if (theme === 'light') {
			window.localStorage.setItem('theme', 'dark')
			setTheme('dark')
			document.body.classList.add('dark-mode')
		} else {
			window.localStorage.setItem('theme', 'light')
			setTheme('light')
			document.body.classList.remove('dark-mode')
		}
	}

	useEffect(() => {
		let localTheme = window.localStorage.getItem('theme')
		if (!localTheme) {
			window.localStorage.setItem('theme', theme)
			localTheme = theme
		}
		localTheme && setTheme(localTheme)
		localTheme === 'dark' && document.body.classList.add('dark-mode')
		// eslint-disable-next-line
	}, [])

	return [theme, toggleTheme]
}
