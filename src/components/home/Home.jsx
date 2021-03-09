import React from 'react'

import Footer from './components/Footer.jsx'
import Face from './components/Face.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Works from './components/Works.jsx'
import SmallWorks from './components/SmallWorks.jsx'
import Contact from './components/Contact.jsx'


const Home = () => {
	return (
			<div>
				<Face/>
				<About/>
				<Skills/>
				<Works/>
				<SmallWorks/>
				<Contact/>
				<Footer/>
			</div>
	)
}

export default Home
