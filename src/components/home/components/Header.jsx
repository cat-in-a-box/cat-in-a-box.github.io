import React from 'react'

const Header = () => {
	return (
			<header id={'Header'}>
				<div className={'HeaderButton'}><a href={'#face'}>Главная</a></div>
				<div className={'HeaderButton'}><a href={'#about'}>Обо мне</a></div>
				<div className={'HeaderButton'}><a href={'#projects'}>Проекты</a></div>
				<div className={'HeaderButton'}><a href={'#contacts'}>Контакты</a></div>
				<div className={'HeaderButton'}><a href={'https://github.com/cat-in-a-box'} target={'blank'}>GitHub</a></div>
			</header>
	)
}

export default Header
