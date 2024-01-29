/*
     File Name: MainRouter.jsx
          Sets the different possible links that this site has.
     Student Name: Juan Pablo Amorocho
     Student ID: 301410163
     Date: 28/01/2024
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/About'
import Contact from './src/Contact'
import Project from './src//Project'
import Layout from './components/Layout'
import Services from './src/Services'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>

                     <Route exact path="/" element={<Home />} />
                     <Route exact path="/about" element={<About />} />
                     <Route exact path="/contact" element={<Contact />} />
                     <Route exact path="/project" element={<Project />} />
                     <Route exact path="/services" element={<Services />} />
                     

                 </Routes>
        </div>
        )
}
export default MainRouter
