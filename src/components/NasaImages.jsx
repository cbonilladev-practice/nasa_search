import React from 'react'
import './NasaImages.scss'

const NasaImages = ({ nasaData }) => {
	console.log(nasaData)

	return (
		<div>
			<h2>This is a where the data go. 👇</h2>
			<div className="images">
			{
				nasaData && nasaData.map((data, idx) => {
					return (
						<div key={idx} className="image">
							{data.links?.map((data, i) => {
								return <img src={data.href} alt="space" key={i} />
							})}
						</div>
					)
				})
			}
			</div>
		</div>
	)
}

export default NasaImages