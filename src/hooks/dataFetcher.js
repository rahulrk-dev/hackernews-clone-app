import { useState, useEffect } from 'react'
import { getStories } from '../utils/apis'

const useDataFetcher = (type) => {
	const [stories, setStories] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getStories(type)
			.then((stories) => {
				setStories(stories)
				setIsLoading(false)
			})
			.catch((err) => {
				setIsLoading(false)
			})
	}, [type])

	return { isLoading, stories }
}

export default useDataFetcher
