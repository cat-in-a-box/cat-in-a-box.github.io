import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link'
import DarkModeButton from './DarkModeButton'

export default class PreloaderRemover extends Component {
	componentDidMount() {
		let navbar = document.getElementById('Header')
		let toggleBackground = document.getElementById('ToggleBackground')
		let toggleButton = document.getElementById('ToggleButton')
		let sticky = navbar.offsetTop + 60

		window.onscroll = function () {
			navbarFixing()
		}

		function navbarFixing() {
			if (window.pageYOffset >= sticky) {
				navbar.classList.add('HeaderFixed')
				toggleButton.classList.add('ToggleButtonFixed')
				toggleBackground.classList.add('ToggleBackgroundFixed')
			} else {
				navbar.classList.remove('HeaderFixed')
				toggleButton.classList.remove('ToggleButtonFixed')
				toggleBackground.classList.remove('ToggleBackgroundFixed')
			}
		}
	}

	render() {
		return (
				<header id={'Header'}>
					<div className={'HeaderButton'}>
						<HashLink to={'/#About'}>Обо мне</HashLink>
					</div>
					<div className={'HeaderButton'}>
						<HashLink to={'/#Works'}>Проекты</HashLink>
					</div>
					<div className={'HeaderButton'}>
						<HashLink to={'/#Contacts'}>Контакты</HashLink>
					</div>
					<div className={'HeaderButton'}>
						<a href={'https://github.com/cat-in-a-box'} target={'blank'}>GitHub</a>
					</div>
					<DarkModeButton/>
				</header>
		)
	}
}
