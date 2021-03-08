import React from 'react'

const Header = () => {
	return (
			<header id={'Header'}>
				<div className={'HeaderButton'}><a href={'#Face'}>Главная</a></div>
				<div className={'HeaderButton'}><a href={'#About'}>Обо мне</a></div>
				<div className={'HeaderButton'}><a href={'#Works'}>Проекты</a></div>
				<div className={'HeaderButton'}><a href={'#Contacts'}>Контакты</a></div>
				<div className={'HeaderButton'}><a href={'https://github.com/cat-in-a-box'} target={'blank'}>GitHub</a></div>
			</header>
	)
}

export default Header
