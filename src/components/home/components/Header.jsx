import React from 'react'
import DarkModeButton from './DarkModeButton'

const Header = () => {
	return (
			<header id={'Header'}>
				<div className={'HeaderButton'}><a href={'#Face'}>Главная</a></div>
				<div className={'HeaderButton'}><a href={'#About'}>Обо мне</a></div>
				<div className={'HeaderButton'}><a href={'#Works'}>Проекты</a></div>
				<div className={'HeaderButton'}><a href={'#Contacts'}>Контакты</a></div>
				<div className={'HeaderButton'}><a href={'https://github.com/cat-in-a-box'} target={'blank'}>GitHub</a></div>
				<DarkModeButton/>
			</header>
	)
}

export default Header
