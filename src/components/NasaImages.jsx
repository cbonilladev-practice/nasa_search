import React, { useState } from 'react'
import './NasaImages.scss'

const NasaImages = ({ nasaData, loading }) => {
	const [currentNasaID, setCurrentNasaID] = useState("")

	const getNasaId = (value) => {
		setCurrentNasaID(value.target.parentElement.id)
		console.log(currentNasaID)
	}

	console.log(nasaData[0].data[0].description)

	if (loading) {
		return <p>...Loading</p>
	}

	return (
		<div>
			{ loading ? <p>...Loading</p> : 
			<div className="images">
				{
					nasaData && nasaData.map((data, idx) => {
						return (
							<div data-toggle="tooltip" title={data.data[0].description} key={idx} id={data.data[0].nasa_id} className="image_container">
								{data.links?.filter(listing => listing.href.includes("jpg")).map((data, i) => {
									return <img className="image" onClick={(e) => getNasaId(e)} src={data.href} id={i} alt="space" key={i} />
								})}
							</div>
						)
					})
				}
			</div>
		}
		</div>
	)
}

export default NasaImages