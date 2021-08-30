import React, { useState } from 'react'
import './NasaAPI.scss'
import NasaImages from './NasaImages'

const NasaAPI = () => {
	const [nasaData, setNasaData] = useState([])
	const [searchInput, setSearchInput] = useState("")
	const [loading, setLoading] = useState(true)

	const fetchData = async (e) => {
		const data = await fetch(`https://images-api.nasa.gov/search?q=${searchInput}`)
		.then(response => response.json())
		.then(data => setNasaData(data.collection.items))
		.catch(err => console.log(err))
		.finally(setLoading(false))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		fetchData()
	}

	const handleChange = (e) => {
		setSearchInput(e.target.value)
	}

	return (
		<div>
			<h2>Search NASA Images</h2>
			<form onSubmit={handleSubmit}>
				<input name="searchValue" type="text" value={searchInput} onChange={handleChange} placeholder="search term"></input>
				<button value="Submit">Submit</button>
			</form>
			<section>
				<NasaImages nasaData={nasaData} loading={loading}/>
			</section>
		</div>
	)
}

export default NasaAPI
