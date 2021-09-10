import React, { useState } from 'react'
import NasaLogo from '../assets/nasa.jpeg'
import './NasaAPI.scss'
import NasaImages from './NasaImages'

const NasaAPI = () => {
	const [nasaData, setNasaData] = useState([])
	const [searchInput, setSearchInput] = useState("")
	const [loading, setLoading] = useState(false)

	const fetchData = async (e) => {
		const data = await fetch(`https://images-api.nasa.gov/search?q=${searchInput}`)
		.then(setLoading(true))
		.then(response => response.json())
		.then(data => setNasaData(data.collection.items))
		// .then(loggedData => console.log(loggedData))
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
			<img src={NasaLogo} alt="nasa logo" id="nasa_logo"></img>
			<form onSubmit={handleSubmit}>
				<label htmlFor="searchValue">Search NASA</label><br/>
				<input required autoComplete="off" name="searchValue" type="text" value={searchInput} onChange={handleChange} placeholder="search term"></input>
				<button value="Submit">Submit</button>
			</form>
			<section>
				<NasaImages nasaData={nasaData} loading={loading}/>
			</section>
		</div>
	)
}

export default NasaAPI
