import React, { useState } from 'react';
import './NasaImages.scss';

const NasaImages = ({ nasaData, loading }) => {
	const [currentNasaID, setCurrentNasaID] = useState("")
	const [nasaImageList, setNasaImagesList] = useState(null);

	if (currentNasaID !== "") {
		console.log("hello")
	}

	const fetchImages = async () => {
		const data = await fetch(`https://images-api.nasa.gov/asset/${currentNasaID}`, {
			mode: 'cors',
		})
		.then(response => response.json())
		.then(data => data.collection.items)
		// .then(rawData => rawData.filter(x => x?.includes('.jpg')))
		.then(jpegData => setNasaImagesList(jpegData[0].href))

		console.log(nasaImageList)
	}

	const getNasaId = (value) => {
		setCurrentNasaID(value.target.parentElement.id);
		fetchImages();
	}

	// console.log(nasaData[0].data[0].description)

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