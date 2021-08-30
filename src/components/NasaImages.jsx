import React from 'react'

const NasaImages = ({ nasaData }) => {
	console.log(nasaData)

	return (
		<div>
			<h2>This is a where the data go. 👇</h2>
			{
				nasaData && nasaData.map((data, idx) => {
					return (
						<div key={idx}>
							<p>{data.href}</p>
							<div>
								{data.links.map((data) => {
									return <p>{data.href}</p>
								})}
								{/* {data.data.map((data) => {
									return <p>{data.description}</p>
								})} */}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default NasaImages