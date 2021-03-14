import React from 'react'

import Footer from './components/Footer'
import Face from './components/Face'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import SmallWorks from './components/SmallWorks'
import Contact from './components/Contact'


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
};

export default Home
