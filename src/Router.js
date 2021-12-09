//1. IMPORT
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/index'
import CRUD from './components/CRUD'
import Rod from './components/CRUD/Rod'





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
                </Route>
               </Routes>
           </BrowserRouter>
        </>
    )
}

//3.Export
export default Router
