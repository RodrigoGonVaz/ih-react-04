import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <>
            <Header/>
            {/* El outlet son todos los componentes hijos de la ruta padre, dependiendo del Path. */}
            {/* Si estoy en localhost:3000/crud, entonces outlet es el <CRUD/> */}
                <Outlet/>
                
            <Footer/>
        </>
    )
}

export default Layout
