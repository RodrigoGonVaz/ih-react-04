import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Countries = (props) => {

    //console.log(props) // {allCountries: Array(250)}
    const allCountries = props.allCountries
    //console.log(allCountries) //(250) [{…}, {…}, {…}, …][0 … 99][100 … 199][200 … 249]length: 250


	return (
		<>

			<div className="flex border-r border-gray-200 pb-4 bg-white overflow-y-auto ">
				<nav className="flex px-2 space-y-8 bg-gray-300 w-1/4">
					<div className="w-full">
						{
							allCountries.map((e, index) => {
								return (
									<Link key={index} to={e.cca3}  className="bg-gray-100 text-gray-900 group flex px-2 py-2 text-sm font-medium underline">
										{e.name.common}
									</Link>
								)
							})

						}	
					</div>
				</nav>
                {/* OJO para que aparezca el Country que es el hijo de Countries en Router.js */}
                <Outlet/>
			</div>
            
		</>
	)
}

export default Countries
