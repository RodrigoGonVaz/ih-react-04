//1. IMPORT
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/index'
import CRUD from './components/CRUD'
import Rod from './components/CRUD/Rod'
import Countries from './components/Countries'
import data from './countries.json'
import Country from './components/Country'





//2. FUNCION
const Router = () => {
    
    
    return (

        //Arquitectura de Routin en react
        <>
           <BrowserRouter>
               <Routes>
                <Route path="/" element={<Layout />} >

                    {/* Index dice uso el path de mi padre */}
                   <Route index element={ <Home/> } />
                    {/* localhost:3000/crud */}
                   <Route path="crud" element={ <CRUD/> } />
                   <Route path="rod" element={ <Rod/> } />
                   <Route path="countries" element={ <Countries allCountries={data} /> }>
                            {/* localhost:3000/countries/MEX */}
                            {/* localhost:3000/countries/USA */}
                        <Route path=":id" element={ <Country allCountries={data} /> }/>
                   </Route>

                </Route>
               </Routes>
           </BrowserRouter>
        </>
    )
}

//3.Export
export default Router
